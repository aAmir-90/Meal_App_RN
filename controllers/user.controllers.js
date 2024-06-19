const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (username == null || password == null) {
    return res
      .status(400)
      .json({ success: true, message: "Bad Request: Missing required fields" });
  }

  try {
    const user = new User({ username: username, password: password });
    await user.save();
    res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid Credentials");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      message: "User Login Successfully",
      token,
    });
  } catch (error) {
    console.log("Error in LOGIN ", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
