// 01_node_basics/http_server.js
// Minimal HTTP server using Node's built-in http module.
// This corresponds to the early "Hello World" style server in the chapter.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from plain Node.js HTTP server');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});
