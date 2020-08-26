import React, { Component } from "react";
import PropTypes from "prop-types";



class HeadChecker extends Component {
  getStyle = () => {
    return {
      background: "#424949 ",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      color: "white",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render(){
    const {id, desc, weight, completed } = this.props.todo;
    return (
        
            <div style = {this.getStyle()}>
                    <p>
                    <input
                    type = "checkbox"
                    defaultChecked = {completed}
                    onChange = {this.props.markAsCompleted.bind(this,id)}
                    />{" "}
                    {desc}
                    {" "}
                    {weight}
                    <button onClick ={this.props.delItem.bind(this,id)}>x</button>
                    </p>
                </div>
                
        );

        }
}

export default HeadChecker;
