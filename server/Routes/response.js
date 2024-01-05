const express = require('express')
const Response = require('../Models/response.js')
const router = express.Router()

router.get("/",async (req , res )=>{
    try {
        const responses = await Response.find({})
        if (!responses) {
            console.log("No responses found")
            res.status(404).json({message : "No responses found"})
        }
        res.status(200).json(responses)
    } catch (error) {
        console.log("Response fetch error" , error?.message)
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
      const { user, subject, feedback, rating } = req.body;
      const newResponse = new Response({ user, subject, feedback, rating });
      const savedResponse = await newResponse.save();
      res.status(201).json(savedResponse);
    } catch (error) {
      console.error('Error adding response:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router