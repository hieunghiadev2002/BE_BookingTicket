const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ngayLap: {
    type: Date,
    require: true,
    trim: true,
  },
  trangThai: {
    type: String,
    require: true,
    enum: ['Vaild', 'Expired'],
    default: 'Vaild',
  },
  tongTien: {
    type: String,
    require: true,
    trim: true,
  },
  viTriGhe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'viTriGhe',
    requireL: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    requireL: true,
  },
  chuyenXe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chuyenXe',
    requireL: true,
  },
});
mongoose.model('PhieuDatVe', ticketSchema);
