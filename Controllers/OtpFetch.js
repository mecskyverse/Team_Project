// otpService.js
const connection = require("../Database/connection.js");

async function getOTPByEmail(req, res) {
  try {
    const email = req.body.email;

    console.log('Email:', email);
    const query = `SELECT * FROM otps WHERE email = "${email}" ORDER BY createdAt DESC LIMIT 1`;
    let otpRecord
    connection.query(query , (err , rows)=>{
      if (err) {
        console.log("Error fetching records")
        return res.status(404).json(err);
      }else{
        otpRecord = rows[0]
        const response = {
          email,
          otp: otpRecord ? otpRecord.otp : null,
        };
    
        return res.status(200).json(response);
      }
    })


  } catch (error) {
    console.error("Error fetching OTP:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = getOTPByEmail ;
// // otpService.js
// const OTP = require("../Models/Otp");

// async function getOTPByEmail(req, res) {
//   try {
//     const formData = req.body;
//     const email = formData.email

//     console.log("Email:", email);

//     const otpRecord = await OTP.findOne({ email }).sort({ createdAt: -1 });

//     console.log("OTP Record:", otpRecord);

//     const response = {
//       email,
//       otp: otpRecord ? otpRecord.otp : null,
//     };

//     return res.status(200).json(response);
//   } catch (error) {
//     console.error("Error fetching OTP:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }


// module.exports = getOTPByEmail ;
