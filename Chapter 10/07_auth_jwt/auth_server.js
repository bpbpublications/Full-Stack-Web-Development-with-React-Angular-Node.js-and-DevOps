// 07_auth_jwt/auth_server.js
// Small Express server that mounts auth routes.

const express = require('express');
const authRoutes = require('./auth_routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Auth server listening on port ${PORT}`);
});
