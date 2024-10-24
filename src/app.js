const express = require('express')
const app = express();
const connectDb = require('./configs/db');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
const configureRoutes = require('./configs/routes');
const cors = require('cors');
const path = require('path');

//Middleware limit request
const limiter = require('./configs/limiter');
require('./configs/config')
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
    console.log("Server is running on port ", process.env.PORT),
        console.log("Swagger is running on port ", process.env.PORT);
});

// Routes 
configureRoutes(app);
app.use(express.json());
// 404 error handling middleware
app.use(notFound);

// General error handling middleware
app.use(errorHandler);