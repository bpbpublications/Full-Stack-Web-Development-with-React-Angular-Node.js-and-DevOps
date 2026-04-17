// 07_auth_jwt/authorizeRole.js
// Role-based authorization helper (authorizeRole('admin')), as shown in the chapter.

function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

module.exports = authorizeRole;
