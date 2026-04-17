// 07_auth_jwt/authMiddleware.js
// JWT authentication middleware based on Chapter 10's description.

const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).send('Token required');
  }

  const token = authHeader.split(' ')[1];

  try {
    // SECRET should be defined in process.env.JWT_SECRET in production
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret_key');
    next();
  } catch (err) {
    return res.status(401).send('Invalid token');
  }
}

module.exports = authMiddleware;
