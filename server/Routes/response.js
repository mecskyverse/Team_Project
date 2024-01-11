const express = require('express')
const Response = require('../Models/response.js')
const router = express.Router()
const connection = require("../Database/connection.js")

router.get("/", async (req, res) => {
    try {
      // Prepare the SQL query
      const query = `
        SELECT *
        FROM responses
      `;
  
      // Execute the SQL query
      connection.query(query, (err, rows) => {
        if (err) {
          console.error('Error fetching responses:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        // Check if responses are found
        if (!rows || rows.length === 0) {
          return res.status(404).json({ message: "No responses found" });
        }
  
        // Return the responses
        res.status(200).json(rows);
      });
    } catch (error) {
      console.error('Response fetch error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

router.post('/', async (req, res) => {
try {
    // Extract data from the request body
    const { user, subject, feedback, rating } = req.body;

    // Prepare the SQL query
    const query = `
    INSERT INTO responses (user, subject, feedback, rating)
    VALUES (?, ?, ?, ?)
    `;

    // Execute the SQL query with parameters
    connection.query(query, [user, subject, feedback, rating], (err, results) => {
    if (err) {
        console.error('Error adding response:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Get the ID of the newly inserted response
    const insertedId = results.insertId;

    // Retrieve the inserted response from the database
    const insertedResponseQuery = `
        SELECT *
        FROM responses
        WHERE id = ?
    `;

    // Execute the SQL query to get the inserted response
    connection.query(insertedResponseQuery, [insertedId], (err, rows) => {
        if (err) {
        console.error('Error retrieving inserted response:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Check if the response is found
        if (!rows || rows.length === 0) {
        return res.status(404).json({ message: 'Inserted response not found' });
        }

        // Return the inserted response
        res.status(201).json(rows[0]);
    });
    });
} catch (error) {
    console.error('Error adding response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});
  

module.exports = router