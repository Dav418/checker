import React, { Component } from 'react';


class Signup extends Component{
    state={
        userName:"",
        passWord1:"",
        passWord2:"",
        email:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.checkIfPasswordsMatch() && this.checkIfNotEmptyFeilds()){
            this.setState({ userName:"",passWord1:"", passWord2:"", email:"" });
            //create new user
        }
       
    }

    checkIfPasswordsMatch=()=>{
        if(this.state.passWord1 !== this.state.passWord2){
            alert("Make sure that the passwords match!")
            return false;
        }
        return true;
    }

    checkIfNotEmptyFeilds=()=>{
        let retVal = true;
        if(this.state.userName === ""){
            alert("Username cant be empty!")
            retVal = false;
        }else if (this.state.passWord1 === ""){
            alert("Password cant be empty!")
            retVal = false;
        }else if(this.state.email === "" ){
            alert("Emal cant be left empty!")
            retVal = false;
        }
        return retVal;
    }
        
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form onSubmit={this.onSubmit} >
                <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                value={this.state.userName}
                onChange={this.onChange}
                autoComplete="off"
                />

                <input 
                type="text" 
                name="userName" 
                placeholder="Username" 
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