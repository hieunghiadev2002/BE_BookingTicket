const transporter = require('../configs/mailer');
require('dotenv').config();
class emailService {
  constructor() {
    this.transporter = transporter;
  }
  async sendOTP(to, subject, html) {
    const mailOptions = {
      form: process.env.EMAIL,
      to,
      subject,
      html
    }
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(info.response);
    } catch (error) {
      console.error(error); 
    }
  }
  
}
module.exports = new emailService();