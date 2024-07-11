const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALTROUND);
const User = require("../Models/userSchema");
module.exports=registerController=async (req, res) => {
    try {
      const imgPath = (req.file && req.file.path) || null;
      const hash = bcrypt.hashSync(req.body.password, saltRounds);
      const checkUser = new User({
        ...req.body,
        password: hash,
        imgPath,
      });
      checkUser.save();
      res.status(201).send("User is Created");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }