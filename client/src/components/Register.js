import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import axios from 'axios'

export default class Register extends Component {
    constructor(){

        super()
        this.initialstate={
            email:'',
            nickname:'',
            password:'',
            error:'',
            message:'',
            loader:false

        }
        this.state=this.initialstate
    }
    componentDidMount(){
        this.setState({message:""});
    }
    handleChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value},()=>{
          //  console.log("state changed",this.state);
        })
        
    }
    
    handleSubmit=(event)=>{
        this.setState({loader:true})
        event.preventDefault();
        if(this.state.email && this.state.nickname && this.state.password){
//console.log(this.state)
        
        const userObject={
           
            email:this.state.email,
            nickname:this.state.nickname,
            password:this.state.password
         }
        // console.log(userObject);
         var pr= axios.post("/register", userObject);
       pr.then(data=>{
           //console.log("Successfull",data.data.message);
           this.setState({message:data.data.message,loader:false})
        
           // console.log(typeof(data.data.items));
           // // this.setState({...this.state,})
           // this.setState({currentvideo:data.data.items[0],videos:data.data.items}, () => {
           //   console.log("After setState",this.state);
             
       //    });
           
        
   
       }).catch(err=>{
   //console.log("err is",err)
       }).finally(function () {
           // always executed
          // console.log("always executed");
          
         })
       
        }
        else{
            this.setState({error:"Fill all the fields!"})
        }
     

    }
    render() {
        return (
            <div>
                
                 <form className="form" onSubmit={this.handleSubmit} >
                 <div id="heading"><i class="fas fa-user-alt"></i> Register</div>
<div className="name-section">
        <input type="text" name="email" id="email" autocomplete="off"   value={this.state.email} onChange={this.handleChange} required/>
        <label for="email" className="label-name"> <span className="content-name">E-mail</span></label>
        <div id="name-required">Required!</div>
</div>
<div className="name-section">
        <input type="text" name="nickname" id="nickname" autocomplete="off" value={this.state.nickname} onChange={this.handleChange} required/>
        <label for="nickname" className="label-name"> <span className="content-name">Nick Name</span></label>
</div>

<div className="name-section">
        <input type="password" name="password" id="password" autocomplete="off"   value={this.state.password} onChange={this.handleChange} required/>
        <label for="password" className="label-name"> <span className="content-name">Password</span></label>
</div>



<input type="submit" name="signup_submit" id="submit" value="Register" /> {this.state.loader && <img id="loader" src="http://www.mountvernon.org/site/outbound/loading.gif"></img>} 
<br></br>
Already have an account? <Link to="/"> Login instead!</Link>

<br></br>
<b><i id="message">{this.state.message}</i></b>

</form>
                
            </div>
        )
    }
}
