/**
 * Simple HTTP client request using Node's built-in `http`.
 * Run after starting the server:
 *   node 01_http_basics/client-request.js
 */
const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/api/time",
  method: "GET",
  headers: { "Accept": "application/json" }
};

const req = http.request(options, (res) => {
  let data = "";
  res.on("data", chunk => (data += chunk));
  res.on("end", () => {
    console.log("Status:", res.statusCode);
    console.log("Headers:", res.headers);
    console.log("Body:", data);
  });
});

req.on("error", (err) => console.error("Request error:", err));
req.end();
