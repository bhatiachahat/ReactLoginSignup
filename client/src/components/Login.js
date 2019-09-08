import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import {Register} from './Register'
import axios from 'axios'
import '../App.css';
import { Redirect } from  "react-router-dom";

export default class Login extends Component {
    constructor(){
        super();
        this.initialstate={
            email:'',
            nickname:'',
            password:'',
            error:'',
            message:'',
            loader:false,
            toDashboard:false

        }
        this.state=this.initialstate

    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value},()=>{
            //console.log("state changed",this.state);
        })
        
    }
    handleSubmit=(event)=>{
        this.setState({loader:true})
        
        event.preventDefault();
        if(this.state.email && this.state.nickname && this.state.password){
//console.log(this.state)
       
        var userObject={
           
            email:this.state.email,
            nickname:this.state.nickname,
            password:this.state.password
         }
         //console.log("====",userObject);
        var pr= axios.post("/login", userObject

        );
        //  var pr=axios({
        //     url: 'http://localhost:6000/login',
        //     method: 'post',
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //     data: {
        //         email:this.state.email,
        //         nickname:this.state.nickname,
        //         password:this.state.password
        //     },
        //     })
       pr.then(data=>{
           //console.log("Successfull",data);
           this.setState({message:data.data.message,loader:false })
           // console.log(typeof(data.data.items));
           // // this.setState({...this.state,})
           // this.setState({currentvideo:data.data.items[0],videos:data.data.items}, () => {
           //   console.log("After setState",this.state);
             
       //    });
       if(data.data.status=="S"){
           //console.log("Settimeout");
        setTimeout(
            function() {
                this.setState({toDashboard:true});
            }
            .bind(this),
            2000);
       }
           
       
    
   
       }).catch(err=>{
  // console.log("err is",err)
       }).finally(function () {
           // always executed
         //  console.log("always executed");
          
         })
       
        }
        else{
            this.setState({error:"Fill all the fields!"})
        }

    }
    componentDidMount(){
        this.setState({message:""});
    }
    render() {
        if(this.state.toDashboard ===true){
            return(
                <Redirect to='/user/dashboard' />
            )
           
        }
        return (
            <div>
          
                  <form className="form" onSubmit={this.handleSubmit} >
                  <div id="heading"><i class="fas fa-user-check"></i> Login</div>
<div className="name-section">
        <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} autocomplete="off"  required/>
        <label for="name" className="label-name"> <span className="content-name">E-mail</span></label>
        <div id="name-required">Required!</div>
</div>
<div className="name-section">
        <input type="text" name="nickname" id="nickname" value={this.state.nickname} onChange={this.handleChange}  autocomplete="off"  required/>
        <label for="email" className="label-name"> <span className="content-name">Nick Name</span></label>
</div>

<div className="name-section">
        <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}  autocomplete="off"  required/>
        <label for="rollno" className="label-name"> <span className="content-name">Password</span></label>
</div>
{/* <div className="name-section">
        <input type="text" name="fathersname"  id="fname" autocomplete="off"  required/>
        <label for="fathersname" className="label-name"> <span className="content-name">Father's Name</span></label>
</div> */}
{/* <div className="name-section">
        <input type="number" name="contact" autocomplete="off" id="contact" required/>
        <label for="contact" className="label-name"> <span className="content-name">Contact No.</span></label>
</div> */}


<input type="submit" name="signup_submit" id="submit" value="Login" />{this.state.loader && <img id="loader" src="http://www.mountvernon.org/site/outbound/loading.gif"></img>} 
<br></br>
<Link to="/register">Sign Up Now!</Link>
<br></br>
<b><i id="message">{this.state.message}</i></b>



            </form>
            </div>
        )
    }
}
