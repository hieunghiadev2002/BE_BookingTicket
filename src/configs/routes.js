const express = require('express');
const authRoute = require('../routes/authRoute');
const loaiXeRoute = require('../routes/loaiXeRoute');
const xeRoute = require('../routes/xeRoute');
const jwt = require('../middlewares/jwt');
const chuyenXeRoute = require('../routes/chuyenXeRoute');
const tuyenXeRouter = require('../routes/tuyenXeRoute');
const tinhThanhRoute = require('../routes/tinhThanhRoute');
const seatRouter = require('../routes/seatRoute');
const configureRoutes = (app) => {
  app.get('/', welcome);
  app.use('/api/auth', authRoute);
  app.use(
    '/api/loai-xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    loaiXeRoute,
  );
  app.use(
    '/api/xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    xeRoute,
  );
  app.use(
    '/api/chuyen-xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    chuyenXeRoute,
  );
  app.use(
    '/api/tinh-thanh',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    tinhThanhRoute,
  );
  app.use('/api/tuyen-xe', jwt.authenticateToken, tuyenXeRouter);
  app.use('/seat', seatRouter);
};
function welcome(req, res) {
  res.status(200).json({
    title: 'API Booking',
    dev: 'Nguyen Phuc Dat',
    subject: 'Ngon ngu phat trien ung dung moi',
  });
}
module.exports = configureRoutes;
