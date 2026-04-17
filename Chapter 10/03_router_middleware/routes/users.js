// 03_router_middleware/routes/users.js
// Example of an Express Router module (users-related routes).

const express = require('express');
const router = express.Router();

// GET /users/
router.get('/', (req, res) => {
  res.send('Users home');
});

// GET /users/:id
router.get('/:id', (req, res) => {
  res.send(`User ${req.params.id}`);
});

module.exports = router;
