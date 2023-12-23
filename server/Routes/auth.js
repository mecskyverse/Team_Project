const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Import jsonwebtoken library
const User = require("../Models/User.js");

// Your secret key for signing JWTs
const secretKey = "SAMPLE_SECRET_KEY";

router.post("/signup", async (req, res) => {
  const formData = req.body;

  try {
    // Hash the user's password before saving it to the database
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token after successful signup
    const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: "1d" });

    // Send the token and a success response
    res.json({ token, message: "Signup successful!" });
  } catch (error) {
    console.error("Signup failed:", error.message);
    // Handle error appropriately, e.g., show an error message to the user
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      // If user not found or password is incorrect, send an error response
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Generate a JWT token after successful login
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1d" });
  
      // Send the token and a success response
      res.json({ token, message: "Login successful!" });
    } catch (error) {
      console.error("Login failed:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
module.exports = router;
