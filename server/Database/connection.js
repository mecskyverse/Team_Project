// // db.js
// const mongoose = require("mongoose");

// const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.3apuxzg.mongodb.net/Appenius";
// // const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.3apuxzg.mongodb.net/?retryWrites=true&w=majority/Appenius";

// mongoose.connect(MONGODB_URI, {
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// module.exports = mongoose;


const mysql = require('mysql2/promise');
async function createConnection(){
  try {
    const connection = await mysql.createConnection({
      host: '64.23.198.227', // Replace with your actual host
      database: 'Kirsh_Project', // Replace with your actual database name
      user: 'durgesh', // Replace with your actual username (avoid using 'root')
      password: 'newpassword', // Replace with your actual password (avoid storing directly in code)
    });

    console.log('Database connection successful using SQL');
    return connection;
  } catch (error) {
    console.error('Database connection Error:', error.message);
    throw error; // Re-throw the error to allow proper handling in the calling code
  }
}

async function runQuery(connection, query, ...params) {
  try {
    const [rows, fields] = await connection.execute(query, params);
    return { rows, fields }; // Return query results
  } catch (error) {
    console.error('Error running query:', error.message);
    throw error; // Re-throw the error to allow proper handling in the calling code
  }
}

async function closeConnection(connection) {
  try {
    await connection.end();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing connection:', error.message);
  }
}

module.exports = {
  createConnection, runQuery, closeConnection
}