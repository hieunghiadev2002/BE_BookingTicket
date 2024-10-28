//this file config send email
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    // eslint-disable-next-line no-undef
    user: process.env.EMAIL_USER,
    // eslint-disable-next-line no-undef
    pass: process.env.EMAIL_PASS,
  },
});
module.exports = transporter;
