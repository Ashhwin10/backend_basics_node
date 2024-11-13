const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({ message: "unAuthorized password" });
  }

  if (authorization != process.env.ROUTE_PASSWORD) {
    return res.status(403).json({ message: "unAuthorized password" });
  }
  next();
};

module.exports = { verifyAuth };
