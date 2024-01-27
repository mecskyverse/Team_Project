const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOtp");
const storeOTP = require("../Controllers/OtpStore");
const { promisify } = require("util");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "dhirajksahu01@gmail.com",
    pass: "brqa xvnw zxaa nmbp", // Use App Password or your actual password
  },
});

// Promisify the sendMail function
const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  var mailOptions = {
    from: "dhirajksahu01@gmail.com",
    to: email,
    subject: "OTP from Callback Coding",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await sendMailAsync(mailOptions);
    storeOTP(email, otp);
    console.log("Email sent successfully!");
    return res.status(200).json({ otp: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error sending email" });
  }
});

module.exports = { sendEmail };
