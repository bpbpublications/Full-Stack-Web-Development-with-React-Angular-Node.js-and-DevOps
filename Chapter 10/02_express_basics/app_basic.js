// 02_express_basics/app_basic.js
// Minimal Express app: shows how to create an Express instance and define routes.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse JSON request bodies
app.use(express.json());

// GET / route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js backend');
});

// Route with route parameter: /users/:id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User with id = ${id}`);
});

// Route with query string: /search?q=term
app.get('/search', (req, res) => {
  const term = req.query.q;
  res.send(`Search for ${term}`);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
