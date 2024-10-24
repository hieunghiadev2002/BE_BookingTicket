const twilio = require('twilio');
require('dotenv').config();
class OTPService {
  constructor() {
    this.accountSid = process.env.TWILIO_ACCOUNT_SID;
    this.authToken = process.env.TWILIO_AUTH_TOKEN;
    this.client = twilio(this.accountSid, this.authToken);
  }
  async sendOTP(toPhoneNumber, otp) {
    //send OTP to phoneNumber
    //return OTP
    return this.client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: toPhoneNumber,
    });
  }
  async createValidationRequest() {
    const validationRequest = await this.client.validationRequests.create({
      friendlyName: 'My Home Phone Number',
      phoneNumber: '+84399864429',
    });
    console.log(validationRequest.sid);
  }
}
module.exports = new OTPService();
