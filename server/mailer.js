// mailer.js
const nodemailer = require("nodemailer");
require("dotenv").config(); // For loading .env variables

const transporter = nodemailer.createTransport({
  service: "Gmail", // Or another email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transporter;
