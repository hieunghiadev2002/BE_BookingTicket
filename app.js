const express = require('express')
const app = express();
const connectDB = require('./src/configs/db')
const authRoute = require('./src/routes/authRoute')
const loaiXeRoute = require('./src/routes/loaiXeRoute')
const xeRoute = require('./src/routes/xeRoute')
const chuyenXeRoute = require('./src/routes/chuyenXeRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/configs/swaggerConfig');
require('dotenv').config();
connectDB();

// Middleware
app.use(express.json());
//body parser 
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port ", process.env.PORT), 
    console.log("Swagger is running on port ", process.env.PORT);
});
app.get('/',  (req, res) => {
    res.status(200).json({
        message: "Welcome to the API Booking",
        timeStamps: new Date().getTime()
    });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/auth', authRoute);
app.use('/api/loai-xe', loaiXeRoute);
app.use('/api/xe', xeRoute);
app.use('/api/chuyen-xe', chuyenXeRoute);
// 404 error handling middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: "API not found", 
        timeStamps: new Date().getTime()
    });
});

// General error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal Server Error"
    });
});