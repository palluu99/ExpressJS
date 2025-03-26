// const port=7416;
// app.listen(port,()=>{
//     console.log(`Server running on port ${port}`);   
// });

//var express = require('express');
//var app = express();
//
//app.get('/', function (req, res) {
//    res.send('<html><body><h1>Hello World</h1></body></html>');
//});
//
//app.post('/submit-data', function (req, res) {
//    res.send('POST Request');
//});
//
//app.put('/update-data', function (req, res) {
//    res.send('PUT Request');
//});
//
//app.delete('/delete-data', function (req, res) {
//    res.send('DELETE Request');
//});
//
//const port = 1238;
//app.listen(port, ()=> {
//    console.log(`Node server is running..${port}`);
//});



const express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');
const colors = require('colors');
const cors = require('cors');

//var userRouter = require('./routes/usersRoutes');

const app = express();
//call to database
connectDB();
//middleware
app.use(morgan("combined"));
require('dotenv').config();
app.use(cors());

//below code can be used for to set the path of public folder
app.use(express.static(path.join(__dirname,"public")));
//app.use(express.json());
//or you can also use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set("view engine","ejs");
app.set('views', path.join(__dirname,'views'));
app.use((req, res, next) => {
    res.locals.layout = 'partials/layout'; // Define default layout
    next();
});

//define the route/endpoint
app.use("/api/v1",require("./routes/userRoutes"));
app.use("/api/v1", require("./routes/contactRoutes"));
app.use("/api/v1", require("./routes/registerRoutes"));


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
