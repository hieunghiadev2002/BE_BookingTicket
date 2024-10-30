const authRoute = require('../routes/authRoute');
const LoaiXeRouter = require('../routes/loaiXeRoute');
const XeRouter = require('../routes/xeRoute');
const jwt = require('../middlewares/jwt');
const ChuyenXeRouter = require('../routes/chuyenXeRoute');
const TuyenXeRouter = require('../routes/tuyenXeRoute');
const TinhThanhRouter = require('../routes/tinhThanhRoute');
const seatRouter = require('../routes/seatRoute');
const HttpStatusCodes = require('../common/httpStatusCodes');
const BenXeRouter = require('../routes/benXeRoute');
const BookingRouter = require('../routes/bookingTicketRoute');
const ticketRouter = require('../routes/ticketRoute');
const validateCreateBooking = require('../middlewares/validator');
const chiTietGheRouter = require('../routes/chiTietGheRoute');
const adminRouter = require('../routes/adminRouter');
const configureRoutes = (app) => {
  app.use('/api/auth', authRoute);
  app.use(
    '/api/loai-xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    LoaiXeRouter,
  );
  app.use(
    '/api/xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    XeRouter,
  );
  app.use(
    '/api/chuyen-xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    ChuyenXeRouter,
  );
  app.use(
    '/api/tinh-thanh',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    TinhThanhRouter,
  );

  app.use('/api/tuyen-xe', TuyenXeRouter);
  app.use('/seat', jwt.authenticateToken, seatRouter);
  app.use(
    '/api/ben-xe',
    jwt.authenticateToken,
    jwt.authorizeRoles('admin', 'user'),
    BenXeRouter,
  );
  app.use(
    '/api/booking-ticket',
    validateCreateBooking.validateCreateBooking(),
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    BookingRouter,
  );
  app.use(
    '/api/ticket',
    jwt.authenticateToken,
    jwt.authorizeRoles('user', 'admin'),
    ticketRouter,
  );
  app.use('/api/chiTietGhe', chiTietGheRouter);
  app.use('/admin', adminRouter);
};

module.exports = configureRoutes;
