// 08_project_structure/server.js
// Separate server entry point that imports app.js and starts the HTTP server.

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
