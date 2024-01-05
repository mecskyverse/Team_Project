const OTP = require("../Models/Otp.js");

const storeOTP = async (email, otp) => {
  try {
    const newOTP = new OTP({ email : email,otp : otp });
    await newOTP.save();
    console.log("OTP stored successfully");
  } catch (error) {
    console.error("Error storing OTP:", error);
  }
}

module.exports =  storeOTP
