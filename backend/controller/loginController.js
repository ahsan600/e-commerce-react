const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");
const privateKey = process.env.SECERT_KEY;
module.exports=loginController=async (req, res) => {
    try {
      const checkUser = await User.findOne({ email: req.body.email });
      if (!checkUser) {
        return res.status(401).send("Invalid Credentials");
      }
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        checkUser.password
      );
      if (!checkPassword) {
        return res.status(401).send("Invalid Credentials");
      }
      const token = jwt.sign(checkUser.id, privateKey);
      res.status(200).json({ message: "Correct Credentials", token });
    } catch (error) {
        console.log(error)
      res.status(500).send("Internal Server Error");
    }
  }