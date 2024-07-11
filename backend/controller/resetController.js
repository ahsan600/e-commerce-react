const User = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALTROUND);
module.exports = resetController = async (req, res) => {
    console.log(req.body,req.query);
  try {
    const hashPassword =await bcrypt.hash(req.body.password, saltRounds);
    await User.updateOne(
      { token: req.query.token },
      { $set: { password: hashPassword } }
    );
    res.send("Password is Reset")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
