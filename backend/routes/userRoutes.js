const express = require("express");
const upload = require("../middleware/multer");
const userRoutes = express.Router();
const checkUserMiddleware = require("../middleware/checkUser");
const loginController = require("../controller/loginController");
const registerController = require("../controller/registerController");
const forgetController = require("../controller/forgetController");
const resetController = require("../controller/resetController");

userRoutes.post(
  "/register",
  upload.single("file"),
  checkUserMiddleware,
  registerController
);
userRoutes.post("/login", loginController);
userRoutes.post("/forgetpassword", forgetController);
userRoutes.post("/resetpassword", resetController);
module.exports = userRoutes;
