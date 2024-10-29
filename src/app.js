const express = require('express');
const app = express();
const connectDb = require('./configs/db');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
const configureRoutes = require('./configs/routes');
const cors = require('cors');
const path = require('path');
const ViTriGheSchema = require('./models/ViTriGhe');
//Middleware limit request
const limiter = require('./configs/limiter');
const HttpStatusCodes = require('./common/httpStatusCodes');
const stripe = require('stripe');
// eslint-disable-next-line no-undef

require('./configs/config');
app.use(express.json());
app.use(cors());
connectDb;

// const seedDataViTriGhe = async () => {
//   console.log('seedDataViTriGhe');
//   for (let i = 1; i <= 8; i++) {
//     console.log(i);
//     const viTriGhe = new ViTriGheSchema({
//       soGhe: 'LMS-' + i,
//       priceSeats: 120000,
//       xe: '6720b93ba4c2b8ca7ef62e06',
//     });
//     const a = await viTriGhe.save();
//     console.log(a);
//   }
// };
// seedDataViTriGhe();
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
  console.log('Server is running on port ', process.env.PORT);
});

// Routes
configureRoutes(app);
app.use(express.json());
// 404 error handling middleware
app.use(notFound);

// General error handling middleware
app.use(errorHandler);
