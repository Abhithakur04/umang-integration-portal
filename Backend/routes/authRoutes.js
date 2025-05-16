  
const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const { register, login, logout, checkAuth } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticate, logout);

// Add this route:
router.get('/check', authenticate, checkAuth);

module.exports = router;
