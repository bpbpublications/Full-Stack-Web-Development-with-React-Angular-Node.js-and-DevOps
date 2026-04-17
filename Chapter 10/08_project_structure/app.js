// 08_project_structure/app.js
// Typical modular Express app setup (used with a separate server.js).

const express = require('express');
const userRoutes = require('../03_router_middleware/routes/users'); // reuse from router example
const errorHandler = require('../05_error_handling/errorHandler');
const notFound = require('../05_error_handling/notFound');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
