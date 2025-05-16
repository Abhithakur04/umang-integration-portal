const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Read token from cookie named 'token'
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { userId, role }
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
