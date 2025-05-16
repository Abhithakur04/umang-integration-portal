const AadhaarLog = require('../models/AadhaarLog');

exports.getAadhaarStatus = async (req, res) => {
  const { aadhaar, dob } = req.body;

  // Input Validation
  const aadhaarRegex = /^\d{12}$/;
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!aadhaarRegex.test(aadhaar) || !dobRegex.test(dob)) {
    return res.status(400).json({ error: 'Invalid Aadhaar or DOB format' });
  }

  // Mask Aadhaar (show only last 4 digits)
  const maskedAadhaar = `XXXX-XXXX-${aadhaar.slice(-4)}`;

  // Log to DB
  const log = new AadhaarLog({
    maskedAadhaar,
    dob,
    role: req.user.role
  });

  await log.save();

  // Return mock response
  res.json({
    status: 'Active',
    aadhaar_number: maskedAadhaar,
    dob,
    last_updated: '2024-04-25'
  });
};
