const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  try {
    const { fullName, email, mobileNo, password, confirmPassword } = req.body;

    console.log(req.body);
    // Check if all required fields are provided
    if (!fullName || !email || !mobileNo || !password || !confirmPassword) {
      return res.status(400).json({ msg: "Please fill in all fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "password does not matched" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      fullName,
      email,
      mobileNo,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: err?.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please provide email and password" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Generate JWT Token
    const payload = {
      user: {
        id: user.id,
      },
    };
    const token = await jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).send({ msg: err?.message });
  }
};

// Forgot Password
const forgotPasswordUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ msg: "Please provide email" });
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    res.json({ msg: "Password reset instructions sent successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: err?.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  forgotPasswordUser,
};
