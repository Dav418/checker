import React, { Component } from 'react';


class Signup extends Component{
    state={
        userName:"",
        passWord1:"",
        passWord2:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.passWord1 !== this.state.passWord2){
            alert("Make sure that the passwords match!")
        } else if(this.state.userName !== "" && this.state.passWord1 !== ""){
            this.setState({ userName:"",passWord1:"", passWord2:"" });
            //login user
        }else{
            alert("Cyka blet cant be empty")
        }
       
    }
        
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form onSubmit={this.onSubmit} 
                >
                <input 
                type="text" 
                name="userName" 
                placeholder="Title..." 
                value={this.state.userName}
                onChange={this.onChange}
                autoComplete="off"
                />

                <input 
                type="password" 
                name="passWord1" 
                value={this.state.passWord1}
                onChange={this.onChange}
                autoComplete="off"
                />

                <input 
                type="password" 
                name="passWord2" 
                value={this.state.passWord2}
                onChange={this.onChange}
                autoComplete="off"
                />
                <input 
                type="submit" 
                value="Submit" 
                className="btn"
                />
            </form>   
        )
    }

}

export default Signup;