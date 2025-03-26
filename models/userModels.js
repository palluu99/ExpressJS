const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is require"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const User = mongoose.model("user",userSchema);
module.exports = User;
