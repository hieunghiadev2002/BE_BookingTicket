const express = require('express')
const app = express();
const connectDb = require('./src/configs/db');
const errorHandler = require('./src/middlewares/errorHandler');
const notFound = require('./src/middlewares/notFound');
const configureRoutes = require('./src/configs/routes');
const cors = require('cors');
require('./src/configs/config')
app.use(express.json());
app.use(cors());
connectDb;



// Middleware
app.use(express.json());
//body parser 
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port ", process.env.PORT),
        console.log("Swagger is running on port ", process.env.PORT);
});
app.get('/', (req, res) => {
    res.status(200).json({
        title: "API Booking",
        dev: "Nguyen Phuc Dat",
        subject: "Ngon ngu phat trien ung dung moi",
    });
});
// Routes 
configureRoutes(app);

// 404 error handling middleware
app.use(notFound);

// General error handling middleware
app.use(errorHandler);