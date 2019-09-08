const express=require("express");
const userSecureRoutes=express.Router();


//const UserSchema=require("../../db/models/userSchema");
//const User=require("../../db/user/usermodel");
//const userOperations=require("../../db/helpers/userOperations");
const jwt = require('jsonwebtoken');
const passport = require('passport');
userSecureRoutes.get('/profile',(req,res)=>{
    
    res.json({message : 'You made it to the secure route',
    user : req.user
  //  token : req.query.secret_token
})
})
userSecureRoutes.get("/user/dashboard", passport.authenticate('jwt', { session: false }),(req, res)=>{
   //userOperations.findProfile(req.user,res);

  
  });
  
 




module.exports=userSecureRoutes;