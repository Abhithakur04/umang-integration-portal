const express = require('express');
const cors = require('cors');
 const helmet = require('helmet');
 const rateLimit = require('express-rate-limit');

const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';  
const PORT = process.env.PORT || 5000;
const connectDB=require("./configure/db");

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const aadhaarRoutes = require('./routes/aadhaarRoutes');

const app = express();

// CORS configuration to allow frontend with credentials (cookies)
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));



// Security headers
app.use(helmet());

// Rate limiter
  app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // limit each IP to 100 requests per windowMs
})); 

// Parse cookies
app.use(cookieParser());

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', aadhaarRoutes);

// first we connect the database then start server
  
 connectDB()
  .then(()=>{
    console.log("Succesfuly connect to database");
     app.listen(PORT,()=>{
        console.log("Successfully server start");
    });
  })
 .catch((err) => {
  console.error("❌ Failed to connect to database:", err.message);
  process.exit(1); // optional: stop the server if DB fails
});



