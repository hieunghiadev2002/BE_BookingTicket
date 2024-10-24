const generateOTPEmail = (user, otp) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007bff; text-align: center;">Booking Ticket</h2>
      <p>Dear ${user.fullName},</p>
      <p>Your OTP code is: <strong style="color: #ff0000; font-size: 18px;">${otp}</strong></p>
      <p>Please use this code to complete your verification. The code is valid for 10 minutes.</p>
      <p>If you did not request this code, please ignore this email.</p>
      <br>
      <p>Best regards,</p>
      <p style="font-weight: bold;">Booking Ticket</p>
    </div>
  `;
};

module.exports = { generateOTPEmail };
