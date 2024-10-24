const express = require('express');
const authRoute = require('../routes/authRoute');
const loaiXeRoute = require('../routes/loaiXeRoute');
const xeRoute = require('../routes/xeRoute');
const jwt = require('../middlewares/jwt');
const chuyenXeRoute = require('../routes/chuyenXeRoute');
const tinhThanhRoute = require('../routes/tinhThanhRoute');

const configureRoutes = (app) => {
    app.get('/', welcome);
    app.use('/api/auth', authRoute);
    app.use('/api/loai-xe', loaiXeRoute);
    app.use('/api/xe', xeRoute);
    app.use('/api/chuyen-xe', chuyenXeRoute);
    app.use('/api/tinh-thanh', jwt.authenticateToken, jwt.authorizeRoles('user', 'admin'),tinhThanhRoute);
}
function welcome(req, res) {
    res.status(200).json({
        title: "API Booking",
        dev: "Nguyen Phuc Dat",
        subject: "Ngon ngu phat trien ung dung moi",
    });
}
module.exports = configureRoutes;