// 05_error_handling/app_with_errors.js
// Example Express app using the error and 404 middleware.

const express = require('express');
const errorHandler = require('./errorHandler');
const notFound = require('./notFound');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ok', (req, res) => {
  res.json({ status: 'ok' });
});

// Route that throws to demonstrate error handling
app.get('/boom', (req, res) => {
  const err = new Error('Something went wrong');
  err.status = 500;
  throw err;
});

// 404 handler
app.use(notFound);

// Error-handling middleware must be last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Error-handling demo app listening on port ${PORT}`);
});
