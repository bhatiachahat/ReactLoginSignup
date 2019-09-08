const express=require("express");
const userRoutes=express.Router();


const UserSchema=require("../db/schema/userschema");
const User=require("../db/model/usermodel");
const userOperations=require("../db/helpers/useroperations");

userRoutes.post("/register",(req,res)=>{
   // console.log("inside register api")
    var nickname=req.body.nickname;
    var email=req.body.email;
    var password=req.body.password;
    const userObject={
        nickname:nickname,
        email:email,
        password:password
    }
   // console.log("User object is",userObject);
    userOperations.registerUser(userObject,res);
})

userRoutes.post("/login",(req,res)=>{
    var nickname=req.body.nickname;
    var email=req.body.email;
    var password=req.body.password;
    const userObject={
      nickname:nickname,
        email:email,
        password:password
    }
   // console.log("User object in login is",userObject); 
    userOperations.loginUser(userObject,res);
})
module.exports=userRoutes;