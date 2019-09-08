const mongoose = require('../connection');
const userSchema = mongoose.Schema;
const user= new userSchema({
    
    nickname:{type:String},
    email:{type:String},
    password:{type:String}
    
    
});
const ReactUser = mongoose.model('reactusers',user);
module.exports=ReactUser;