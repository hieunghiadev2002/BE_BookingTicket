const mongoose = require('mongoose');

const tinhThanhSchema = new mongoose.Schema({
    tenTinhThanh:
    {
        type: String,
        require: true,
        trim: true
    },
})

module.exports = mongoose.model('tinhThanh', tinhThanhSchema)