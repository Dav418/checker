import React, { Component } from 'react';   
import auth from "../accounts/auth";
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';



class AccountsCont extends Component{

    render(){

        {if (auth.isAuthenticated())
        {
            return(
                <p>You are logged in!</p>
                //show account page to be designed
                )
        }else{
            return(
                <div>
                    <p>What would you like to do?</p>
                    <Link to="/accounts/login">Login</Link> | 
                     <Link to="/accounts/signup">Signup</Link> 
                </div>
            )
        }
    }    
    }

}

export default AccountsCont;