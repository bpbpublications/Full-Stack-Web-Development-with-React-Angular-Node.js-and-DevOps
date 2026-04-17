const router = require("express").Router();

/**
 * This is a teaching demo, not a secure auth system.
 * It demonstrates how a server might set a cookie after "login".
 */

router.post("/login", (req, res) => {
  const { username } = req.body || {};
  const user = (username && String(username).trim()) || "guest";

  // In real apps, set Secure + HttpOnly + SameSite properly and use sessions/JWT.
  res.cookie("demo_user", user, { httpOnly: true, sameSite: "lax", maxAge: 60 * 60 * 1000 });
  res.json({ message: "Logged in (demo)", user });
});

router.post("/logout", (req, res) => {
  res.clearCookie("demo_user");
  res.json({ message: "Logged out (demo)" });
});

router.get("/me", (req, res) => {
  res.json({ user: req.cookies?.demo_user || null });
});

module.exports = router;
