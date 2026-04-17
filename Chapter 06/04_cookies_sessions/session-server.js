/**
 * Sessions demo (server-side session + client-side session id cookie).
 * Uses express-session MemoryStore (fine for demos, not production).
 */
const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3003;

app.use(session({
  secret: "chapter6-demo-secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 1000
  }
}));

app.get("/", (req, res) => {
  res.type("html").send(`
    <h1>Sessions Demo</h1>
    <ul>
      <li><a href="/visit">/visit</a> (increments visit count)</li>
      <li><a href="/whoami">/whoami</a> (stores name in session)</li>
      <li><a href="/reset">/reset</a> (destroys session)</li>
    </ul>
  `);
});

app.get("/visit", (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.json({ views: req.session.views, sessionId: req.sessionID });
});

app.get("/whoami", (req, res) => {
  const name = req.query.name || "Rupesh";
  req.session.name = name;
  res.json({ message: "Saved name in session", name, sessionId: req.sessionID });
});

app.get("/reset", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Failed to destroy session" });
    res.json({ message: "Session destroyed" });
  });
});

app.listen(PORT, () => console.log(`Session server at http://localhost:${PORT}`));
