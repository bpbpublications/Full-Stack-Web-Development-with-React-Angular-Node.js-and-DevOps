// 06_validation_security/validation_example.js
// Request validation example using express-validator as in Chapter 10.

const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).escape()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If we reach this point, validation passed.
    // In a real app, create the user here.
    res.status(201).json({ message: 'User registered successfully' });
  }
);

app.listen(PORT, () => {
  console.log(`Validation example listening on port ${PORT}`);
});
