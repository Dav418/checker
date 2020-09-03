import React, { Component } from 'react';


class Login extends Component{
    state={
        userName:"",
        passWord:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.checkIfNotEmptyFeilds()){
            this.setState({ passWord:"", userName:"" });
            //login user
        }
       
    }


    checkIfNotEmptyFeilds=()=>{
        let retVal = true;
        if (this.state.passWord === ""){
            alert("Password cant be empty!")
            retVal = false;
        }else if(this.state.userName === "" ){
            alert("Username cant be left empty!")
            retVal = false;
        }
        return retVal;
    }
        
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form onSubmit={this.onSubmit} >
                Username: 
                <input 
                type="text" 
                name="userName" 
                placeholder="Username" 
                value={this.state.userName}
                onChange={this.onChange}
                autoComplete="off"
                />
                Password: 
                <input 
                type="password" 
                name="passWord" 
                value={this.state.passWord1}
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

export default Login;