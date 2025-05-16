# UMANG Integration Portal

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, login, submit Aadhaar details, and check their Aadhaar status. The backend uses JWT authentication with secure HTTP-only cookies. The frontend is built with React and styled with Tailwind CSS.

---

## Features

- User registration and login with role-based access
- Password hashing with bcrypt for security
- JWT authentication stored in HTTP-only cookies to protect against XSS
- Logout functionality clearing the auth cookie
- Aadhaar submission and status retrieval
- Secure backend with Helmet and rate limiting
- CORS configured for frontend-backend communication with credentials
- Responsive React frontend styled with Tailwind CSS

---

## Technologies Used

- **Backend:** Node.js, Express, MongoDB (via Mongoose), JWT, bcrypt, Helmet, express-rate-limit
- **Frontend:** React, Axios, React Router, Tailwind CSS
- **Deployment:** Backend on Render, Database on Railway, Frontend on Vercel

---

##  Backend  Project Structure

```
Backend/
├── controllers/
│ └── authController.js
  └── aadhaarController.js
├── models/
│ └── User.js
  └── AdhaarLog.js
├── routes/
│ ├── authRoutes.js
│ └── aadhaarRoutes.js
├── middlewares/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── configure/
│ └── db.js
├── server.js
├── package.json
```

## API Endpoints

The backend exposes several API endpoints to handle user authentication and Aadhaar-related functionalities:

| Endpoint               | Method | Description                             |
|------------------------|--------|---------------------------------------|
| `/api/auth/register`   | POST   | Registers a new user with username, password, and role. Passwords are securely hashed. |
| `/api/auth/login`      | POST   | Authenticates a user and issues a JWT stored in an HTTP-only cookie for secure sessions. |
| `/api/auth/logout`     | POST   | Logs out the user by clearing the authentication cookie. |
| `/api/aadhaar-status`  | POST   | Allows authenticated users to submit Aadhaar details and retrieve their Aadhaar status. |

These endpoints form the core of the application’s functionality, enabling secure user management and Aadhaar integration.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm
- MongoDB Atlas or Railway (for database hosting)

---

### Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
  ```
  1. Install dependencies:

   ```bash
   npm install
   ```
  2. Create a .env file in the backend folder and add the following:
   ```bash
MONGO_URI=your_mongo_connection_uri
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```
4. Start the backend server:

   ```bash
   npm start
   ```


   # UMANG Frontend

This is the **React + Vite frontend** for the UMANG Integration Portal — a full-stack app that allows users to register, log in, and submit Aadhaar details using secure cookie-based authentication.

---

## 🚀 Features

- Built with **React + Vite**
- Styled using **Tailwind CSS**
- Uses **cookie-based auth** (secure, httpOnly JWT)
- Communicates with backend using Axios with `withCredentials: true`
- Pages:
  - Login
  - Register
  - Dashboard (Aadhaar submission + Logout)

---

## 📁 Folder Structure
```
Frontend/
├── public/
├── src/
│ ├── components/
│ │ ├── LoginForm.jsx
│ │ ├── RegisterForm.jsx
│ │ ├── AadhaarForm.jsx
│ │ └── ResultCard.jsx
│ ├── pages/
│ │ ├── LoginPage.jsx
│ │ ├── RegisterPage.jsx
│ │ └── Dashboard.jsx
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── .env
└── package.json
```


---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/umang-integration-portal.git
cd umang-integration-portal/frontend
```

## 🚀 Getting Started

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variable

Create a `.env` file in the `frontend/` directory and add the following:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

> ℹ️ Make sure this URL points to your deployed backend.

### 4. Run the App Locally

```bash
npm run dev
```

The app will run at: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment (Vercel)

1. Push the code to GitHub.
2. Import the `frontend` folder into [Vercel](https://vercel.com).
3. Set the following environment variable in Vercel:

```ini
VITE_API_URL=https://your-backend-url.onrender.com/api
```

4. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

---

## ✅ Notes

- Axios is configured to send cookies automatically.
- Authentication is handled using **cookies only** (no `localStorage`).
- TailwindCSS is set up and working via `index.css`.

## 🌐 Live Demo

You can access the live version of the app here:

👉 [Live App Link](https://umang-integration-portal.vercel.app/)

