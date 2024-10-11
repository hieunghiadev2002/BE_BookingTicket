const mongoose = require('mongoose');

const chuyenXeSchema = new mongoose.Schema({
    tenChuyenXe:
    {
        type: String,
        require: true,
        trim: true
    },
    ngayDi:
    {
        type: Date,
        require: true
    },
    timeDKKH:
    {
        type: String,
        require: true,
        trim: true
    },
    ngayDen:
    {
        type: Date,
        require: true
    },
    timeDKKT:
    {
        type: String,
        require: true,
        trim: true
    },
    giaChuyenXe:
    {
        type: Number,
        require: true,
        trim: true,
    },
    soChoTrong:
    {
        type: Number,
        require: true
    },
    tuyenXe:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tuyenXe',
        require: true
    },
    xe:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Xe',
        require: true
    }
})

module.exports = mongoose.model('chuyenXe', chuyenXeSchema);