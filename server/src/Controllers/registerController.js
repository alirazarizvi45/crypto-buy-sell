const Users = require("../models/User");
const bcrypt = require("bcrypt");

const registerController = async (req, res, next) => {
  try {
    const { email, password, country, referralCode } = req.body;

    // Input validation
    if (!email || !password || !country || !referralCode) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if the email is already registered
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email address already exists.",
      });
    }

    // Create a new user
    const newUser = await Users.create({
      email,
      password: hashedPassword,
      country: country.label,
      referralCode,
    });

    // Return success response
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
};

module.exports = { registerController };
