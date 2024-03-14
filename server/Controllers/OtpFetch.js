// otpService.js
const {createConnection, runQuery, closeConnection} = require("../Database/connection.js");

async function getOTPByEmail(req, res) {
  try {
    const email = req.body.email;
    console.log('Email:', email);
    const connection = await createConnection();

    try{
      const query = `SELECT * FROM otps WHERE email = "${email}" ORDER BY createdAt DESC LIMIT 1`;
      const [rows] = await connection.execute(query, [email]); 
      const otpRecord = rows[0];
      const response = {
        email,
        otp: otpRecord ? otpRecord.otp : null,
      };

      return res.status(200).json(response);
    }
    catch (error) {
      console.error('Error fetching OTP:', error.message);
      throw error; // Re-throw for handling in the outer catch block
    } finally {
      await closeConnection(connection); // Ensure connection closure
    }

  } catch (error) {
    console.error("Error fetching OTP:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = getOTPByEmail ;
