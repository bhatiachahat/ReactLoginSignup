



const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();
var path=require("path");
const passport = require('passport');
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(require("./utils/cors"));

app.use(express.static('public'));

 app.use('/',require('./api/userapi'));
 app.use('/user',passport.authenticate('jwt', { session : false }), require("./api/secureapi"))


app.listen(process.env.PORT || 7000 , (err)=> {
    if(err) {
        console.log("Error while loading the backend server at 7000");
    }
    else {
     
     
        console.log("Server started successfully");
        
    }
});