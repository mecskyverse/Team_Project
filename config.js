require('dotenv').config();

const config = {
  MongoUri : process.env.MONGO_URL,
  jwtSecret : process.env.JWT_SECRET,
  // Add more variables as needed
};

module.exports = config;
