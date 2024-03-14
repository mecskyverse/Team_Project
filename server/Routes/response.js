const express = require("express");
const Response = require("../Models/response.js");
const router = express.Router();
// const connection = require("../Database/connection.js");
const { createConnection, closeConnection } = require ("../Database/connection.js")


router.get("/", async (req, res) => {
  try {
    // Establish connection using imported functions
    const connection = await createConnection();

    try {
      // Prepare the SQL query with parameterized placeholder
      const query = `
        SELECT *
        FROM responses
        ORDER BY createdAt DESC
      `;

      // Execute the SQL query using connection.execute
      const [rows] = await connection.execute(query);

      // Check if responses are found
      if (!rows || rows.length === 0) {
        return res.status(404).json({ message: "No responses found" });
      }

      // Return the responses
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching responses:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }
  } catch (error) {
    console.error("Response fetch error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, subject, feedback, contact } = req.body;

    // Establish connection using imported functions
    const connection = await createConnection();

    try {
      // Prepare the SQL query with parameterized placeholders
      const query = `
        INSERT INTO responses (name, subject, feedback, contact)
        VALUES (?, ?, ?, ?)
      `;

      // Execute the SQL query using connection.execute
      const [result] = await connection.execute(query, [name, subject, feedback, contact]);

      const insertedId = result.insertId;

      // No need for separate retrieval query
      res.status(201).json({ message: "Response added successfully", id: insertedId });
    } catch (error) {
      console.error("Error adding response:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }
  } catch (error) {
    console.error("Error adding response:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
