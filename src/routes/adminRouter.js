const express = require('express');
const router = express.Router();
router.get('/login', (req, res) => {
  res.render('admin/login');
});
router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard');
});
router.get('/tuyen-xe', (req, res) => {
  res.render('admin/TuyenXe/tableTuyenXe');
});
module.exports = router;
