const path = require('path');
const contact = require("../models/registerModels");



const saveRegister = async (req,res)=>{
    try {
      const {fullname, mobile, email, gender, address, country, state} = req.body;
      const newRegister = await contact.create({
        fullname, mobile, email, gender, address, country, state
      });
      res.status(201).json({
        message:"success",
        newRegister
      });
    } catch (error) {
       console.log(`Error in connection: ${error}`);
       res.status(400).json({
       message:false
       });
    }
}

module.exports = {saveRegister};