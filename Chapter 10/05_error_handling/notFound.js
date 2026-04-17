// 05_error_handling/notFound.js
// 404 handler when route is not matched.

function notFound(req, res, next) {
  res.status(404).json({ error: 'Not found' });
}

module.exports = notFound;
