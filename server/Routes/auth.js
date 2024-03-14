const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Import jsonwebtoken library
const User = require("../Models/User.js");
const { sendEmail } = require("../Middleware/sendEmail");
const getOTPByEmail = require("../Controllers/OtpFetch.js");
// const connection = require("../Database/connection.js")
const {createConnection, closeConnection} = require("../Database/connection.js");


const secretKey = "SAMPLE_SECRET_KEY";

router.post('/signup', async (req, res) => {
  const formData = req.body;

  try {
    const connection = await createConnection();
    try{
      // Hash the user's password before saving it to the database
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    // Create a new user instance with the hashed password
    const query = `INSERT INTO users (firstName, lastName, phoneNumber, email, password) VALUES (?, ?, ?, ?, ?)`;
    const values = [formData.firstName, formData.lastName, formData.phoneNumber, formData.email, hashedPassword];
    const [result] = await connection.execute(query, values);
   
      // Generate a JWT token after successful signup
      const token = jwt.sign({ userId: result.insertId }, secretKey, { expiresIn: '1d' });
      // Send the token and a success response
      res.json({ token, message: 'Signup successful!' });
    }
    catch(error){
      console.error('Signup failed:', error.message);
      // Handle error appropriately, e.g., show a generic error message to the user
      res.status(500).json({ error: 'Internal Server Error' }); // Avoid revealing specific error details
    }
    finally{
      await closeConnection(connection);
    }
  }
   catch (error) {
    console.error('Signup failed:', error.message);
    // Handle error appropriately, e.g., show an error message to the user
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await createConnection();
    try{
        // Find the user by email
        const query = `SELECT * FROM users WHERE email = ?`;
        const values = [email];
        const [rows] = await connection.execute(query, values);
        const user = rows[0];
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

         // Generate a JWT token after successful login
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1d' });
        res.json({ token, message: 'Login successful!', user: {id: user.id, email: user.email, role: user.role} });
    }
    catch{
      console.error('Login failed:', error.message);
      // Handle error appropriately, e.g., show a generic error message to the user
      res.status(500).json({ error: 'Internal Server Error' });
    }
    finally{
      await closeConnection(connection);
    }
  } catch (error) {
    console.error('Login failed:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/passChange', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const connection = await createConnection();
    try {
      // Find the user by email
      const hashedPassword = await bcrypt.hash(password, 10);
      // Update user password (using parameterized query)
      const query = `UPDATE users SET password = ? WHERE email = ?`;
      const values = [hashedPassword, email];
      await connection.execute(query, values);
      res.status(200).json({ message: 'Password update successful!' });
    } catch (error) {
      console.error('Password update failed:', error.message);
      // Handle error appropriately, e.g., show a generic error message to the user
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await closeConnection(connection);
    }
  } catch (error) {
    console.error('Update failed:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

d
router.post("/sendEmail", sendEmail);

router.post("/verify" , getOTPByEmail)
module.exports = router;
