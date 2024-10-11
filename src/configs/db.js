
const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async()=>
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect Succesfully");
    }
    catch(e)
    {
        console.error("Connect Failed", e);
        process.exit(1);
    }
}

module.exports=connectDB;