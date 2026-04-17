// 03_router_middleware/app_with_router.js
// Main app that mounts the users router under /users.

const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount users router
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`App with router listening on port ${PORT}`);
});
