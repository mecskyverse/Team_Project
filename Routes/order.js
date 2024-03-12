// Import necessary modules
const express = require('express');
const router = express.Router();
const Order = require('../Models/Order.js')
const connection = require("../Database/connection.js")
// Define a route to save pickup data
router.post('/', async (req, res) => {
  const formData = req.body;
  console.log(formData)
  try {
    // Prepare the SQL query
    const query = `
      INSERT INTO orders (name, phone, email ,services, date, user, timing, address, specialInstruction, totalWeight, status, totalItems, costPerItem, totalAmount)
      VALUES (?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Extract values from formData
    const values = [
      formData.name,
      formData.phone,
      formData.email,
      formData.services,
      formData.date,
      formData.user,
      formData.timing,
      formData.address,
      formData.specialInstruction,
      formData.totalWeight || 0,
      formData.status || 'Order Placed',
      formData.totalItems || 0,
      formData.costPerItem || 0,
      formData.totalAmount || 0,
    ];

    // Execute the SQL query
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error saving order data:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Return the inserted order data
      const insertedOrder = {
        id: result.insertId,
        ...formData,
      };

      res.status(201).json(insertedOrder);
    });
  } catch (error) {
    console.error('Error saving order data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
console.log(updateFields)
    // Create an array to store the SQL SET clauses
    const setClauses = [];

    // Prepare the SET clauses for each field to be updated
    for (const key in updateFields) {
      if (Order.schema.obj.hasOwnProperty(key)) {
        setClauses.push(`${key} = ?`);
      }
    }

    // Check if any valid fields to update were provided
    if (setClauses.length === 0) {
      return res.status(400).json({ error: 'No valid fields to update' });
    }

    // Prepare the SQL query
    const query = `
      UPDATE orders
      SET ${setClauses.join(', ')}
      WHERE id = ?
    `;

    // Extract values from updateFields
    const values = [...Object.values(updateFields), id];
    console.log('query ', query)
    console.log('value ', values)
    // Execute the SQL query
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error updating order:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Check if the order was found and updated
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Order not found' });
      }

      // Return the updated order data
      const updatedOrder = {
        id,
        ...updateFields,
      };

      res.status(200).json(updatedOrder);
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Prepare the SQL query
    const query = `
      SELECT *
      FROM orders
      WHERE user = ?
    `;

    // Execute the SQL query
    connection.query(query, [id], (err, rows) => {
      if (err) {
        console.error('Error fetching orders by user:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Return the orders found for the specified user ID
      res.status(200).json(rows);
    });
  } catch (error) {
    console.error('Error fetching orders by user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get("/", async (req, res) => {
  try {
    // Prepare the SQL query
    const query = `
      SELECT *
      FROM orders
    `;

    // Execute the SQL query
    connection.query(query, (err, rows) => {
      if (err) {
        console.error('Error fetching all orders:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Check if there are no orders
      if (!rows || rows.length === 0) {
        console.log("No orders available");
        return res.status(404).json({ message: "No order available" });
      }

      // Return all orders
      res.status(200).json(rows);
    });
  } catch (error) {
    console.error('Error fetching all orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Prepare the SQL query
    const query = `
      SELECT *
      FROM orders
      WHERE id = ${id}
    `;

    // Execute the SQL query
    connection.query(query, (err, rows) => {
      if (err) {
        console.error('Error fetching specific order:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Check if the order with the specified ID exists
      if (!rows || rows.length === 0) {
        return res.status(404).json({ message: "Could not find order" });
      }

      // Return the specific order
      res.status(200).json(rows[0]);
    });
  } catch (error) {
    console.error('Error fetching specific order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
