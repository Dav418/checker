import React, { Component } from "react";
import PropTypes from "prop-types";



class CheckerItem extends Component {
  
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  getTextBoxStyle = () =>{
    return {
      border: "none",
      background: 'transparent',
      color: '#000',
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      //width: "100px"
    }
  }

  

 

  render(){
    const {id, desc, weight, completed } = this.props.todo;
    return (
      <div style = {this.getStyle()} onDoubleClick={()=>{console.log("yus")}}>
        
          <input
           type = "checkbox"
           defaultChecked = {completed}
           onChange = {this.props.markAsCompleted.bind(this,id)}
          />{" | "}
          {<input type="text" value={desc} disabled="disabled" 
            style ={this.getTextBoxStyle()} />} 
          {" | "}
          {weight}
          {" | "}
          <button onClick ={this.props.delSub.bind(this,id)}>x</button>
        

      </div>
    );
  }
  
}

export default CheckerItem;
