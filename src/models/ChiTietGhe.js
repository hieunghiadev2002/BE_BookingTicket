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
    ref: 'ChuyenXe',
  },
  trangThai: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  },
});
module.exports = mongoose.model('ChiTietGhe', ChiTietGheSchema);
