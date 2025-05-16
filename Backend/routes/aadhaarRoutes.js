const express = require('express');
const router = express.Router();

const { getAadhaarStatus } = require('../controllers/aadhaarController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/aadhaar-status', authMiddleware, getAadhaarStatus);

module.exports = router;
