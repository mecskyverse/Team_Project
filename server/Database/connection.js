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


const mysql = require('mysql2');
const connection =  mysql.createConnection({
  host: '64.23.198.227',
  database: 'Kirsh_Project',
  user: 'durgesh',
  password : "newpassword",
});

connection.connect((error)=>{
  if (error) {
    console.log("Database connection Error" , error?.message, error?.stack)
  }else{
    console.log("Database connection successful using Sql")
  }
})

module.exports = connection