const mongoose = require('mongoose');

const viTriGheSchema = mongoose.Schema({
  soGhe: {
    type: String,
    required: true,
    trim: true,
  },
  xe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Xe',
    required: true,
    trim: true,
  },

  priceSeats: {
    type: Number,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('viTriGhe', viTriGheSchema);
