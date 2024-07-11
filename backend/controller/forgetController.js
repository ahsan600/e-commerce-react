const User = require("../Models/userSchema");
const randomString = require("randomstring");
const nodemailer = require("nodemailer");

const sendMail = (name, email, token, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ali.hassnain.atrule@gmail.com",
        pass: "tjtrywhjuildvkgx",
      },
    });

    const mailOptions = {
      from: "ali.hassnain.atrule@gmail.com",
      to: email,
      subject: "Reset E-Commerce Password",
      html: `<p>Hi ${name},</p><p>Please click on the link below to reset your password:</p><p><a href="http://localhost:5173/resetpassword?token=${token}">Reset Password</a></p>`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Failed to send email.");
      } else {
        console.log("Email sent successfully.");
        res.status(200).send("Email has been sent.");
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = forgetController = async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      const token = await randomString.generate();
      await User.updateOne(
        { email: req.body.email },
        { $set: { token } },
        { new: true }
      );
      sendMail(checkUser.username, checkUser.email, token);
      res.status(200).send("Email has been sent.");
    } else {
      res.status(401).send("Invalid email.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
