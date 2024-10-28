const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema(
  {
    ngayLapVe: {
      type: Date,
      default: Date.now,
      required: true,
    },
    chuyenXe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChuyenXe',
      required: true,
    },
    danhSachGhe: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChiTietGhe',
        required: true,
      },
    ],
    trangThaiVe: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tongTien: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentDetails: {
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      paymentMethodId: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Ticket', TicketSchema);
