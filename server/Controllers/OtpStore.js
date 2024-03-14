const {createConnection, closeConnection} = require("../Database/connection.js");

async function storeOTP(email, otp) {
  let connection; // Declare outside the try block

  try {
    if (!email || !otp) {
      return { status: 400, error: 'Email and OTP are required in the request body' }; // Return an object with status and error message
    }

    connection = await createConnection(); // Establish connection

    const query = 'INSERT INTO otps (email, otp) VALUES (?, ?)';
    await connection.query(query, [email, otp]);
    console.log('OTP stored successfully');
  } catch (error) {
    console.error("Error storing OTP:", error);
    // Handle potential errors (e.g., database errors)
    return { status: 500, error: 'Internal Server Error' }; // Return an object with status and error message
  } finally {
    if (connection) { // Close connection if established
      await closeConnection(connection);
    }
  }
}

module.exports =  storeOTP
