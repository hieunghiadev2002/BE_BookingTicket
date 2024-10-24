const mongoose = require('mongoose');

const quanHuyenSchema = new mongoose.Schema({
  tenQH: {
    type: String,
    require: true,
    trim: true,
  },
  tinhThanh: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tinhThanh',
  },
});

module.exports = mongoose.model('quanHuyen', quanHuyenSchema);
