const User=require("../schema/userschema");
const UserModel=require("../model/usermodel")

const config=require("../../utils/config");
const jwt = require('jsonwebtoken');
const bcrypt=require("../../utils/bcrypt");



const userOperations={
    
    registerUser(userObject,res){
       // console.log("inside register user",userObject);

        User.findOne({email:userObject.email},(err,doc)=>{
            if(err){
               // console.log("phela err",err);
                res.status(500).json({status:config.ERROR,message:"Error while finding the User"})
            }else{
              //  console.log("error toh nhi aaya");
                if(doc){
                  //  console.log("doc phele hi mil gya");
                    res.status(200).json({status:config.FAILURE,message:"Email is already registered ! Please login."});
                }else{
                   
                    //console.log("doc hi nhi tha");
                    let hashPassword=bcrypt.convertPassword(userObject.password);
                    let userObj=new UserModel(userObject.nickname,userObject.email,hashPassword);
                   User.create(userObj,(err,doc)=> {
                        if(err) {
                           // console.log("Error while register")
                            res.status(500).json({status:config.ERROR,message:"Error while register."}); 
                        }
                        else{
                            if(doc){
                                //console.log("doc ban gya",doc);
                                res.status(200).json({status:config.SUCCESS,message:"Registration Successful"});
                            }
                        }
                    });
                }
            }
        })
    }
    ,
    loginUser(userObject,res){
       // console.log("inside login user",userObject);
        User.findOne({email:userObject.email},(err,doc)=>{
            if(err){
              //  console.log("err aa gya",err);
                res.status(500).json({status:config.ERROR,message:"Error while login."});
            }
            else{
               // console.log("error toh nhi aaya");
                if(!doc){
                   // console.log("doc hi nhi mila");
                    res.status(200).json({status:config.FAILURE,message:"User not found."});
                }
                else if(doc){
                    //console.log("doc toph mil gya");
                    let userplainpass=userObject.password;
                    let userhashpass=doc.password;
                  //  console.log("1",userplainpass,"2",userhashpass)
                    if((bcrypt.comparePassword(userplainpass,userhashpass)) && doc.nickname===userObject.nickname){
                    
                        //console.log("password correct");
                      const body = {  email : doc.email,nickname:doc.nickname};
                        //Sign the JWT token and populate the payload with the user email and id
                       const token = jwt.sign({ user : body },'top_secret');
                        //Send back the token to the user
                        // return res.json({ token });
                        res.status(200).json({token:token,status:config.SUCCESS,message:"Login Successful"});
                    }
                    else{
                        
                       // console.log("password incorrect");
                        res.status(200).json({status:config.ERROR,message:"Invalid credentials"});
                    }
                   // res.status(200).json({status:config.SUCCESS,message:"Registration Successful"});
                }
            }
        })

    }
}
module.exports=userOperations;