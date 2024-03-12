const express = require('express');
const router = express.Router();
const verifyTokenMiddleware = require('./verifyTokenMiddleware'); // Adjust the path as needed

// Route that requires token authentication
router.get('/protected-feature', verifyTokenMiddleware, (req, res) => {

  res.json({ message: 'Access granted to protected feature!' });
});

module.exports = router;


// Example of a protected header push to access only loggedIn features
// Retrieve the token from localStorage
// const token = localStorage.getItem("token");

// // Set up headers for the Fetch API
// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`, // Include the token in the Authorization header
// };

// // Example of making a GET request with the Fetch API
// fetch("https://api.example.com/data", {
//   method: "GET",
//   headers: headers,
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
