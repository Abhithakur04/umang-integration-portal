const mongoose = require('mongoose');

const aadhaarLogSchema = new mongoose.Schema({
  maskedAadhaar: { type: String, required: true },
  dob: { type: String, required: true },
  role: { type: String, required: true },
  requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AadhaarLog', aadhaarLogSchema);
