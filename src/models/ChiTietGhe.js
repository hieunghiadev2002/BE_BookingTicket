const mongoose = require('mongoose');
const ChiTietGheSchema = new mongoose.Schema({
  viTriGhe: {
    type: mongoose.Schema.Types.ObjectId,
    requird: true,
    ref: 'viTriGhe',
  },
  chuyenXe: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'chuyenXe',
  },
  trangThai: {
    type: String,
    enum: ['Trống', 'Đang Chọn', 'Đã Đặt'],
    default: 'Trống',
  },
});
module.exports = mongoose.model('ChiTietGhe', ChiTietGheSchema);
