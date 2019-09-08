import React from 'react'
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";

export default function Error() {
    return (
        <div id="error">
        {/* <img src="../images/sadface.gif"></img> */}
        <h1>Error 404 !
                  </h1>
                  <br></br>
                  
            <Link to="/" class="home">Go to homepage!</Link>    
    </div>
    )
}
