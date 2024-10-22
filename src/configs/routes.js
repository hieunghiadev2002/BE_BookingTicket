const express = require('express');
const authRoute = require('../routes/authRoute');
const loaiXeRoute = require('../routes/loaiXeRoute');
const xeRoute = require('../routes/xeRoute');
const chuyenXeRoute = require('../routes/chuyenXeRoute');
const tinhThanhRoute = require('../routes/tinhThanhRoute'); 
const configureRoutes = (app) => {
  app.use(express.json());
  app.use('/api/auth', authRoute);
  app.use('/api/loai-xe', loaiXeRoute);
  app.use('/api/xe', xeRoute);
  app.use('/api/chuyen-xe', chuyenXeRoute);
  app.use('/api/tinh-thanh', (req, res) => {
    return res.status(200).json({
      message: "not implemented yet"
    })
  })
}
module.exports = configureRoutes;