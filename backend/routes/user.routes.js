const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPasswordUser,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPasswordUser);

module.exports = userRouter;
