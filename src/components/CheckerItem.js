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
          <button onClick ={this.props.delSub.bind(this,id)}>x</button>
        </p>

      </div>
    );
  }
  
}

export default CheckerItem;
