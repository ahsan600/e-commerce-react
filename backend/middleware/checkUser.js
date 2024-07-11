const User = require("../Models/userSchema");

const checkUserMiddleware = async (req, res, next) => {
  let checkUser = await User.findOne({ email: req.body.email });
  return checkUser ? res.status(409).send("User is Already Available") : next();
};
module.exports = checkUserMiddleware;
