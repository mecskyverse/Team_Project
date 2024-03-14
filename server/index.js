// app.js or server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path'); 
// const mongoose = require("./Database/connection.js"); // Include the database connection
const authRoutes = require("./Routes/auth.js");
const orderRoutes = require('./Routes/order.js')
const responseRoute = require('./Routes/response.js')
const cors = require('cors');

const app = express();
app.use(cors())
const port = 5000;


app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/response", responseRoute);


const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

// app.get('/',(req, res) => {
// res.send('Server is live')
// })


app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});''
