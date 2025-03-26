const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"firstname is required"]
    },
    lastname:{
        type:String,
        required:[true,"lastname is required"]
    },
    mobile:
    {
        type:String,
        required:[true,"mobile is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    },
    message:{
        type:String,
        required:[true,"message is required"]
    }
}, {timestamps:true});

const contact = mongoose.model("contact",contactSchema);
module.exports = contact;