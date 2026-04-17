// 05_logging_winston/app_with_logger.js
// Small Express app wired with Winston logging.

const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  logger.info(`Incoming request`, { method: req.method, url: req.url });
  next();
});

app.get('/', (req, res) => {
  res.send('Hello with Winston logging');
});

app.get('/error', (req, res) => {
  try {
    throw new Error('Something went wrong');
  } catch (err) {
    logger.error('Error route hit', { message: err.message, stack: err.stack });
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  logger.info(`App with Winston listening on port ${PORT}`);
});
