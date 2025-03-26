const express = require('express');
const {getIndexPage,adduser,createUser,getAllUsers,getSingleUser,updateUser,UserDelete,getHomeEjs,getAboutEjs,getContactEjs,getRegisterEjs} = require('../controllers/userController');

// create the router object
const router = express.Router();


//render html file
router.get('/',getIndexPage);
router.post('/user-form',adduser);

//create new user
router.post('/create-user',createUser);

//get all-users
router.get('/get-all-users',getAllUsers);

//get single user
router.get('/get-user/:id',getSingleUser);

//update user
router.put('/update-user/:id',updateUser);

//delete user
router.delete('/delete-user/:id',UserDelete);

// home.ejs file
router.get('/home',getHomeEjs);

//about.ejs file
router.get('/about',getAboutEjs);

//contact.ejs file
router.get('/contact',getContactEjs);

//registration form
router.get('/register',getRegisterEjs);

module.exports = router;


/*
http://localhost:7878/api/v1
http://localhost:7878/api/v1/user-form
http://localhost:7878/api/v1/user-form/100
http://localhost:7878/api/v1/user-form/1/2
*/