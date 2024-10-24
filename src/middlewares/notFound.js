function notFound(req, res, next) {
  return res.status(404).json({
    status: 'false',
    message: 'Request not found',
  });
}
module.exports = notFound;
