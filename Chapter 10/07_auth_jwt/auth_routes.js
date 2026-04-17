// 07_auth_jwt/auth_routes.js
// Simple auth routes: /login issues a JWT, /admin is protected and requires admin role.

const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('./authMiddleware');
const authorizeRole = require('./authorizeRole');

const router = express.Router();

// In a real app, validate username/password and look up user in DB
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== 'admin' || password !== 'password123') {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const userPayload = { id: 1, username: 'admin', role: 'admin' };
  const token = jwt.sign(
    userPayload,
    process.env.JWT_SECRET || 'dev_secret_key',
    { expiresIn: '1h' }
  );

  res.json({ token });
});

router.get('/profile', auth, (req, res) => {
  res.json({ user: req.user });
});

router.get('/admin', auth, authorizeRole('admin'), (req, res) => {
  res.send('Admin content');
});

module.exports = router;
