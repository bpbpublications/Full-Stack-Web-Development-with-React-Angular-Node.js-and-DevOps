// 06_validation_security/security_middleware.js
// Sketch of security middleware configuration from Chapter 10 (helmet, cors, etc.).

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());             // Sets secure HTTP headers
app.use(cors());               // Enables Cross-Origin Resource Sharing
app.use(morgan('combined'));   // HTTP request logging
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Secure Express app with Helmet, CORS, and Morgan');
});

app.listen(PORT, () => {
  console.log(`Security middleware demo listening on port ${PORT}`);
});
