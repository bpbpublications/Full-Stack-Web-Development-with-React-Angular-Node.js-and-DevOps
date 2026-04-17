/**
 * Cookies demo:
 * - Sets a cookie
 * - Reads cookies
 * - Clears cookies
 */
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3002;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.type("html").send(`
    <h1>Cookies Demo</h1>
    <ul>
      <li><a href="/set">/set</a> (sets a cookie)</li>
      <li><a href="/read">/read</a> (reads cookies)</li>
      <li><a href="/clear">/clear</a> (clears cookie)</li>
    </ul>
  `);
});

app.get("/set", (req, res) => {
  // Example cookie: user=Rupesh, expires in 1 hour
  res.cookie("user", "Rupesh", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 1000
  });
  res.json({ message: "Cookie set", cookiesSent: { user: "Rupesh" } });
});

app.get("/read", (req, res) => {
  res.json({ cookiesReceived: req.cookies || {} });
});

app.get("/clear", (req, res) => {
  res.clearCookie("user");
  res.json({ message: "Cookie cleared" });
});

app.listen(PORT, () => console.log(`Cookie server at http://localhost:${PORT}`));
