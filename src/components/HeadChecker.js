import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";




class HeadChecker extends Component {
  getStyle = () => {
    return {
      background: "#424949 ",
      paddingLeft: "10px",
      paddingTop:"1px",
      borderBottom: "1px #ccc dotted",
      color: "white",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  headerStyle = () =>{
    return{
      background: "#424949 ",
      paddingLeft: "10px",
      paddingBottom:"1px",
      paddintTop:"5px",
      borderBottom: "1px black",
      color: "white",
    }
  }

  popupStyle =()=>{
    return{
      color: "black",
      width:"100px",
      height:"100px"
    }
  }
  getTextBoxStyle = () =>{
    return {
      border: "none",
      background: 'transparent',
      color: 'white',
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      //width: "100px"
    }
  }

  componentWillMount(){
    this.props.findWeight(this.props.todo.id)
  }
  render(){
    const {id, desc, weight, completed } = this.props.todo;
    return (
        <React.Fragment>
          <div style={this.headerStyle()}>
          <p>Done? | Desc | Weight | Del  
            <Popup trigger={<button> Trigger</button>} position="right center" >
            <div style={this.popupStyle()}>Popup content here !!</div>
            </Popup> 
          </p>
          </div>
          
          <div style = {this.getStyle()}>
                    <p>
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
                    <button onClick ={this.props.delItem.bind(this,id)}>x</button>
                    </p>
                </div>
        </React.Fragment>
            
                
        );

        }
}

export default HeadChecker;
