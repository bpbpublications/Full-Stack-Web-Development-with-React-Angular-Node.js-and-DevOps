/**
 * Basic HTTP server using Node's built-in `http` module.
 * Demonstrates:
 * - HTTP methods (GET/POST/PUT/DELETE)
 * - URL parsing + query strings
 * - JSON response + request body parsing
 */
const http = require("http");
const { URL } = require("url");

const PORT = 3000;

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method;

  // Basic routing
  if (method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>HTTP Basics</h1>
      <p>Try:</p>
      <ul>
        <li><a href="/hello?name=Rupesh">/hello?name=Rupesh</a></li>
        <li><a href="/api/time">/api/time</a></li>
      </ul>`);
    return;
  }

  if (method === "GET" && path === "/hello") {
    const name = url.searchParams.get("name") || "Guest";
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ message: `Hello, ${name}!`, method, path }));
    return;
  }

  if (method === "GET" && path === "/api/time") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ now: new Date().toISOString() }));
    return;
  }

  if (path === "/api/echo" && ["POST", "PUT"].includes(method)) {
    const raw = await readBody(req);
    let parsed = null;
    try {
      parsed = raw ? JSON.parse(raw) : null;
    } catch {
      // keep parsed as null
    }

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      method,
      path,
      headers: req.headers,
      rawBody: raw,
      jsonBody: parsed
    }));
    return;
  }

  if (path === "/api/resource" && method === "DELETE") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Default 404
  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "Not Found", method, path }));
});

server.listen(PORT, () => {
  console.log(`HTTP server running at http://localhost:${PORT}`);
  console.log("Try: curl http://localhost:3000/hello?name=Rupesh");
});
