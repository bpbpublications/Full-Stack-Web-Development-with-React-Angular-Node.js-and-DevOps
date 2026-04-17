// 03_router_middleware/logger_middleware.js
// Simple logging middleware example used in the chapter.

function logRequest(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

module.exports = logRequest;

// Example usage in an app:
// const express = require('express');
// const logRequest = require('./logger_middleware');
// const app = express();
// app.use(logRequest);
// app.get('/info', (req, res) => {
//   res.send('Information page');
// });
