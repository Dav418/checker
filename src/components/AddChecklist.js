import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import "./buttonCSS.css";
class AddChecklist extends Component{
    state = {
        title:''
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== ""){
            this.props.addNewList(this.state.title);
            this.setState({ title: '' });
        }else{
            alert("Cyka blet cant be empty")
        }
       
    }
        
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    popupStyle =()=>{
        return{
            backgroundColor :"#eae0c2"
        }
    }
    render(){
        
            return(
            <Popup contentStyle={this.popupStyle()} trigger={<button className="buttonStyle" style={{fontSize:"20px"}}> Add new checklist</button>} position="bottom center" >
                <div 
                //style={this.popupStyle()}
                > 
                <form onSubmit={this.onSubmit} 
                //style={{ display: 'flex' }}
                >
                <input 
                type="text" 
                name="title" 
                placeholder="Title..." 
                value={this.state.title}
                onChange={this.onChange}
                autoComplete="off"
                />
                <input 
                type="submit" 
                value="Submit" 
                className="btn"
                //style={{flex: '1'}}
                />
            </form>
        </div>
    </Popup>)        
    }
}

AddChecklist.propTypes = {
    addNewList: PropTypes.func.isRequired
  }

export default AddChecklist;