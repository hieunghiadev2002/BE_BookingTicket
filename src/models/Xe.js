const mongoose = require('mongoose');

const xeSchema = new mongoose.Schema(
  {
    tenXe: {
      type: String,
      required: true,
      trim: true,
    },
    bienSoXe: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nhaSanXuat: {
      type: String,
      required: true,
      trim: true,
    },
    colorXe: {
      type: String,
      trim: true,
    },
    tongSoGhe: {
      type: Number,
      require: true,
      trim: true,
    },
    loaiXe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LoaiXe',
      require: true,
    },
    sucChua: {
      type: Number,
      require: true,
      trim: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model('Xe', xeSchema);
