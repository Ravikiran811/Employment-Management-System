const authMiddleware = (req, res, next) => {
    // Assuming you store user information in req.session.user
    res.locals.user = req.session.user;
    next();
  };
  
  module.exports = authMiddleware;