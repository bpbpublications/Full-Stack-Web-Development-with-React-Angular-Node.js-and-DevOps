// Central error handler (keeps stack out of responses by default)
function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || "Internal Server Error",
    status
  });
}
module.exports = { errorHandler };
