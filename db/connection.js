const mongoose=require("mongoose");

const db=require("./config");
console.log("inside connection");
mongoose.connect(db.url,{useNewUrlParser:true},(err)=> {
    if(err) {
        console.log("Error while connecting to the database ");
    }
    else{
        console.log('connected to database');
    }
    
}) 

module.exports=mongoose;