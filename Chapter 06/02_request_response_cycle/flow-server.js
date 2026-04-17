/**
 * Request–response cycle demo using Express.
 * Shows: DNS lookup, request logging, response timing, and headers.
 */
const express = require("express");
const morgan = require("morgan");
const dns = require("dns").promises;

const app = express();
const PORT = 3001;

// Parse JSON bodies
app.use(express.json({ limit: "1mb" }));

// Add a simple request id (no extra deps)
app.use((req, res, next) => {
  req.requestId = (crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`).toString();
  res.setHeader("X-Request-Id", req.requestId);
  next();
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.get("/", (req, res) => {
  res.type("html").send(`<h1>Request–Response Flow</h1>
  <p>Try:</p>
  <ul>
    <li><a href="/inspect">/inspect</a></li>
    <li><a href="/dns?host=example.com">/dns?host=example.com</a></li>
  </ul>`);
});

app.get("/inspect", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    ip: req.ip,
    requestId: req.requestId
  });
});

app.get("/dns", async (req, res) => {
  const host = req.query.host || "example.com";
  try {
    const addresses = await dns.lookup(host, { all: true });
    res.json({ host, addresses });
  } catch (e) {
    res.status(400).json({ error: "DNS lookup failed", host, details: e.message });
  }
});

app.post("/echo", (req, res) => {
  res.json({ received: req.body, note: "This simulates server processing before responding." });
});

// 404 handler
app.use((req, res) => res.status(404).json({ error: "Not Found" }));

app.listen(PORT, () => console.log(`Flow server at http://localhost:${PORT}`));
