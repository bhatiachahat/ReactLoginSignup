import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register' 
import Error from './components/Error'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
    <Switch>
<Route exact path="/"  component={Login} />
<Route exact path="/register" component={Register} />
<Route exact path="/user/dashboard" component={Dashboard} />

<Route component={Error}/>
</Switch>
   </Router>
  );
}

export default App;
