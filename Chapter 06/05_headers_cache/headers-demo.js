/**
 * Headers demo:
 * - Shows request headers
 * - Sets common response headers
 * - Demonstrates cache-control and a custom header
 */
const express = require("express");

const app = express();
const PORT = 3004;

app.get("/", (req, res) => {
  res.set({
    "X-Powered-By": "Chapter6-Demo",
    "Cache-Control": "no-store",
    "Content-Security-Policy": "default-src 'self'",
    "X-Content-Type-Options": "nosniff"
  });

  res.type("html").send(`
    <h1>HTTP Headers Demo</h1>
    <p>Try:</p>
    <ul>
      <li><a href="/headers">/headers</a></li>
      <li><a href="/download">/download</a></li>
    </ul>
  `);
});

app.get("/headers", (req, res) => {
  res.set("X-Demo", "headers-demo");
  res.json({
    requestHeaders: req.headers,
    tip: "Look at response headers using curl -i or browser devtools."
  });
});

app.get("/download", (req, res) => {
  const text = "This is a small downloadable file.\n";
  res.set({
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Disposition": 'attachment; filename="demo.txt"',
    "Cache-Control": "public, max-age=60"
  });
  res.send(text);
});

app.listen(PORT, () => console.log(`Headers demo at http://localhost:${PORT}`));
