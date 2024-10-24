const mongoose = require('mongoose');

const viTriGheSchema = mongoose.Schema({
  soGhe: {
    type: String,
    required: true,
    trim: true,
  },
  trangThai: {
    type: String,
    required: true,
    enum: ['Trống', 'Đã Đặt'],
    default: 'Trống',
  },
  xe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Xe',
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('viTriGhe', viTriGheSchema);
