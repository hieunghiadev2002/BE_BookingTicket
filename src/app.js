const express = require('express');
const app = express();
const connectDb = require('./configs/db');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
const configureRoutes = require('./configs/routes');
const cors = require('cors');
const path = require('path');
const Xe = require('./models/Xe');
const viTriGhe = require('./models/ViTriGhe');

// const newXe = new Xe({
//   tenXe: 'Limosine',
//   bienSoXe: '59-X3 99999',
//   nhaSanXuat: 'Toyota',
//   colorXe: 'red',
//   tongSoGhe: 30,
//   loaiXe: '60dabf7d7b1b3f0015e5e4a6',
// });
// newXe.save().then((bus) => {
//   for (let i = 1; i <= bus.tongSoGhe; i++) {
//     const newGhe = new viTriGhe({
//       soGhe: 'LMS-' + i,
//       trangThai: 'Trống',
//       xe: bus._id,
//     });
//     newGhe.save();
//   }
//   bus.save();
// });

//Middleware limit request
const limiter = require('./configs/limiter');
require('./configs/config');
app.use(express.json());
app.use(cors());
connectDb;

//View engine
app.set('view engine', 'ejs');
//set view directory
app.set('views', path.join(__dirname, 'views'));
//Static folder
app.use(express.static('src/public'));
// Middleware
app.use(express.json());
//body parser
app.use(express.urlencoded({ extended: true }));
// limiter
app.use(limiter);
app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on port ', process.env.PORT),
    console.log('Swagger is running on port ', process.env.PORT);
});

// Routes
configureRoutes(app);
app.use(express.json());
// 404 error handling middleware
app.use(notFound);

// General error handling middleware
app.use(errorHandler);
