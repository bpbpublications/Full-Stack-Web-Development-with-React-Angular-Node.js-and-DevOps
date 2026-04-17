// 01_docker_node_app/app.js
// Minimal Express app to demonstrate containerization.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node app');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
