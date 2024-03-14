// Import necessary modules
const express = require('express');
const router = express.Router();
const Order = require('../Models/Order.js')
// const connection = require("../Database/connection.js")
const { createConnection, closeConnection } = require ("../Database/connection.js");
const { connection } = require('mongoose');



async function createOrder(formData, connection) {
  try {
    // Prepare the SQL query with parameterized placeholders
    const query = `
      INSERT INTO orders (name, phone, email, services, date, user, timing, address, specialInstruction, totalWeight, status, totalItems, costPerItem, totalAmount)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Extract sanitized values from formData
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

    // Execute the SQL query using connection.execute
    const [result] = await connection.execute(query, values);

    const insertedOrderId = result.insertId;
    return insertedOrderId; // Return the inserted order ID
  } catch (error) {
    throw error; // Re-throw the error for handling in the outer catch block
  }
}


router.post('/', async (req, res) => {
  const formData = req.body;

  try {
    // Establish connection using imported functions
    const connection = await createConnection();

    try {
      // Call the createOrder function for secure execution
      const insertedOrderId = await createOrder(formData, connection);

      // If successful, retrieve the order details using the ID (optional)
      const insertedOrder = { id: insertedOrderId, ...formData }; // Consider fetching details if needed

      res.status(201).json(insertedOrder); // Created status code
    } catch (error) {
      console.error('Error creating order:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }
  } catch (error) {
    console.error('Error creating order:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.put('/:id', async (req, res) => {
  
  try {
    console.log("hitting route")
    const connection = await createConnection();
    const { id } = req.params;
    const updateFields = req.body;
    try{
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

      // Execute the SQL query
      const [result] = await connection.query(query, values)
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
  }
    catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    finally{
      await closeConnection(connection);
    }
    
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Establish connection using imported functions
    const connection = await createConnection();

    try {
      // Prepare the SQL query with parameterized placeholders
      const query = `
        SELECT *
        FROM orders
        WHERE user = ?
        ORDER BY date DESC, created_at DESC
      `;

      // Execute the SQL query using connection.execute
      const [rows] = await connection.execute(query, [id]);

      // Return the orders found for the specified user ID
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching orders by user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }
  } catch (error) {
    console.error('Error fetching orders by user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/", async (req, res) => {
  try {
    // Establish connection using imported functions
    const connection = await createConnection();

    try {
      // Prepare the SQL query with parameterized placeholders
      const query = `
        SELECT *
        FROM orders
        ORDER BY created_at DESC
      `;

      // Execute the SQL query using connection.execute
      const [rows] = await connection.execute(query);

      // Check if there are no orders
      if (!rows || rows.length === 0) {
        console.log("No orders available");
        return res.status(404).json({ message: "No orders available" });
      }

      // Return all orders
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching all orders:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }
  } catch (error) {
    console.error('Error fetching all orders:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Establish connection using imported functions
    const connection = await createConnection();

    try {
      // Prepare the SQL query with a parameterized placeholder
      const query = `
        SELECT *
        FROM orders
        WHERE id = ?
      `;

      // Execute the SQL query using connection.execute and the ID
      const [rows] = await connection.execute(query, [id]);

      // Check if the order with the specified ID exists
      if (!rows || rows.length === 0) {
        return res.status(404).json({ message: "Could not find order" });
      }

      // Return the specific order
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error('Error fetching specific order:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }
  } catch (error) {
    console.error('Error fetching specific order:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
