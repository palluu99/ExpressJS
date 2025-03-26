const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    
    fullname:{
        type:String,
        required:[true, "Fullname is required"]
    },
    mobile:{
        type:String,
        required:[true, "Mobile no. is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    gender:{
        type:String,
        required:[true, "Gender is required"]
    },
    address:{
        type:String,
        required:[true, "Adrress is required"]
    },
    country:{
        type:String,
        required:[true, "Country is required"]
    },
    state:{
        type:String,
        required:[true, "State is requird"]
    }
}, {timestamps:true});


const register = mongoose.model('register', registerSchema);
module.exports = register;