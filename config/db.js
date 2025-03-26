//mongodb://localhost:27017/express-js

const mongoose = require('mongoose');
const color=require('colors');
require('dotenv').config();

const connectDB=async()=>
{
    try
    {
        const mongoDBConn = process.env.DB_URL;
        const conn= await mongoose.connect(mongoDBConn);
        console.log(`Connected to mongoDB:${conn.connection.host}`); 
    }
    catch (error)
    {
        console.log(`MongoDb connection error ${error.message}`);
        process.exit(1);
    } 
    
    
    finally
    {
        console.log("Detabase Connected");
    }
}

module.exports=connectDB;