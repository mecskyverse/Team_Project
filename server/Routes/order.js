// Import necessary modules
const express = require('express');
const router = express.Router();
const Order = require('../Models/Order.js')
// Define a route to save pickup data
router.post('/', async (req, res) => {
  const formData = req.body;

  try {
    // Create a new Pickup document
    const newPickup = new Order(formData);

    // Save the document to the database
    const savedPickup = await newPickup.save();

    res.status(201).json(savedPickup);
  } catch (error) {
    console.error('Error saving pickup data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updateFields = req.body;
  
      // Create an object with only the fields to be updated
      const updateObject = {};
      for (const key in updateFields) {
        if (Order.schema.obj.hasOwnProperty(key)) {
          updateObject[key] = updateFields[key];
        }
      }
  
      // Check if any fields to update were provided
      if (Object.keys(updateObject).length === 0) {
        return res.status(400).json({ error: 'No valid fields to update' });
      }
  
      // Update the order by ID and return the updated order
      const updatedOrder = await Order.findByIdAndUpdate(
        id,
        updateObject,
        { new: true }
      );
  
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/user/:id" , async (req , res )=>{
    try {
        const { id } = req.params;
    
        // Find all orders with the specified userId
        const orders = await Order.find({ 'user._id': id });
        console.log("User Orders Found")
        res.status(200).json(orders);
      } catch (error) {
        console.error('Error fetching orders by user:', error?.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

router.get("/", async (req , res)=>{
    try {
        const orders = await Order.find({})
        if (!orders) {
            console.log("No orders available")
            res.status(404).json({message : "No order available"})
        }
        res.status(200).json(orders)
    } catch (error) {
        console.log("Order fetching Error" , error?.message)
        res.status(500).json(error)
    }
})

router.get("/:id",async (req , res)=>{
  try {
    const id = req.params.id;
    const order = await Order.findById(id)
    if (!order) {
      res.status(404).json({message : "Could not find order"})
    }
    res.status(200).json(order)
  } catch (error) {
    console.log("Cannot fetch specific error" , error?.message)
    res.status(500).json(error)
  }
})

module.exports = router;
