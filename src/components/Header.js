import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <header style={headerStyle}>
                <h1>Checker!</h1>
                <p>A simple checklist application cos I dont like the other ones.</p>
                <Link style= {linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
        )
    }

}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }

export default Header;