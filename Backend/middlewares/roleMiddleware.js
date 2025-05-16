// allowedRoles - List of roles that are permitted (e.g., 'Admin', 'Retailer')

const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ error: 'Unauthorized: User role not found' });
    }

    const userRole = req.user.role;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        error: `Access denied: Requires one of [${allowedRoles.join(', ')}]`,
      });
    }

    next(); // Role is allowed
  };
};

module.exports = roleMiddleware;
