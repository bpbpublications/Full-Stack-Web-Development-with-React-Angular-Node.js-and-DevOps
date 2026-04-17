/**
 * HTTPS demo using Node's `https` module.
 * Requires:
 *   03_https_demo/certs/key.pem
 *   03_https_demo/certs/cert.pem
 */
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = 3443;

const keyPath = path.join(__dirname, "certs", "key.pem");
const certPath = path.join(__dirname, "certs", "cert.pem");

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error("Missing certificate files.");
  console.error("Run the steps in 03_https_demo/generate-cert.md first.");
  process.exit(1);
}

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  });
  res.end(JSON.stringify({
    message: "Hello over HTTPS!",
    note: "This is a local self-signed demo.",
    url: req.url,
    method: req.method
  }));
});

server.listen(PORT, () => {
  console.log(`HTTPS server running at https://localhost:${PORT}`);
});
