const path = require('path');
const userModel = require('../models/userModels');

const getIndexPage=(req,res)=>
{
  res.send("<h1>this is simple express JS application</h1>");
  res.sendFile(path.join(__dirname,"../public/index.html"));
}

const adduser = (req, res) => {
  {
    const { inputdata } = req.body;
    res.json({
      success: true,
      message: `welcome to expressJS ${inputdata}`,
    });
  }
};

//create New user
const createUser = async(req,res)=>{
   try 
   {
    const {name,email,password,isActive} = req.body;
    const user = await userModel.create({
      name,email,password,isActive
   });
   res.status(201).json({
    message:"Success",
    user
   });

   } catch (error) {
    console.log(`Error in connection ${error}`);
    res.status(400).json({
      message:false,
      user
    });
   }
}

const getAllUsers = async(req,res)=>{
  try 
  {
   const users =await userModel.find({});
   res.status(200).json({
    success:true,
    Total_Users:users.length,
    users
   });
  } 
  catch (error)
  {
    res.status(400).json({
      success:false,
      msgs:"getting error in display all users",
      error:error.message
    });
  }
} 

const getSingleUser = async(req,res)=>{
  try 
  {
   const users = await userModel.findById(req.params.id);
   if(users)
    {
      res.status(200).json({
        success:true,
        users
      });
    }
    else
    {
      res.status(400).send("User not found");
    }
  } 
  catch (error) 
  {
    res.status(200).json({
      success:false,
      msg:"getting error single user",
      error:error.message
    });
  }
};

const updateUser = async(req,res)=>{
  try 
  {
    const user= await userModel.findById(req.params.id);
    if(user)
    {
      user.name=req.body.name;
      user.email=req.body.email;

      if(req.body.password)
      {
        user.password=req.body.password;
      }
      user.isActive=req.body.isActive;
      const updateUser=await user.save();
      res.status(200).json({
        success:true,
        msg:"Data updated",
        _id:updateUser._id,
        name:updateUser.name,
        email:updateUser.email,
        isActive:updateUser.isActive
      });
    }
    else{
      res.status(400);
      throw new Error("Data not found");
    }
  } 
  catch (error)
  {
    res.status(400).json({
      message:false,
      msg:"Error in updating the data",
      error:error.message
    });
  }
}

const UserDelete=async(req,res)=>{
  try 
  {
    const user=await userModel.findById(req.params.id);
    if(user)
    {
      await user.deleteOne();
      res.status(200).json({
        success:true,
        msg:"User delete",
      });
    }
    else
    {
      res.status(400);
      throw new Error("user not found");
    }
  } 
  catch (error) 
  {
    res.status(400).json({
      success:false,
      msg:"Error in delete the user",
      error:error.message
    });
  }
}

//home.ejs
const getHomeEjs=(req ,res)=>{
  res.render('pages/home');
}

//about
const getAboutEjs=(req,res)=>{
  res.render('pages/about');
}

//contact
const getContactEjs=(req,res)=>{
  res.render('pages/contact');  //render the contact view
}

//registration
const getRegisterEjs=(req,res)=>{
  res.render('pages/register');
}


module.exports = {getIndexPage,adduser,createUser,getAllUsers,getSingleUser,updateUser,UserDelete,getHomeEjs,getAboutEjs,getContactEjs,getRegisterEjs};



//atlas connection string -
//mongodb+srv://dangatpallavi0:eY7ssSjTFwpaKye0@employee.ue6xfb2.mongodb.net/
//eY7ssSjTFwpaKye0