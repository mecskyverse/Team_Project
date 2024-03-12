const connection = require("../Database/connection.js");

const storeOTP = async (email, otp) => {
  try {
    if (!email || !otp) {
      return res.status(400).json({ error: 'Email and OTP are required in the request body' });
    }
    const query = 'INSERT INTO otps (email, otp) VALUES (?, ?)';
    await connection.execute(query, [email, otp]);
    console.log('OTP stored successfully');
  } catch (error) {
    console.error("Error storing OTP:", error);
  }
}

module.exports =  storeOTP
