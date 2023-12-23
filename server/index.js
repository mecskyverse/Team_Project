// app.js or server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./Database/connection.js"); // Include the database connection
const authRoutes = require("./Routes/auth.js");
const cors = require('cors');

const app = express();
app.use(cors())
const port = 5000;

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
