/**
 * CORS demo API server.
 * Run:
 *   npm run start:cors:api
 */
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3005;

// Allow only the web client origin (served from port 3006)
const allowedOrigin = "http://localhost:3006";

app.use(cors({
  origin: allowedOrigin,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.get("/api/quote", (req, res) => {
  res.json({
    quote: "CORS is a browser security feature that restricts cross-origin requests.",
    time: new Date().toISOString()
  });
});

app.post("/api/echo", (req, res) => {
  res.json({ received: req.body, ok: true });
});

app.listen(PORT, () => console.log(`CORS API at http://localhost:${PORT}`));
