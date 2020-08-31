import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import './buttonCSS.css';




class HeadChecker extends Component {
  state={
    title:'',
    weight:0
  }
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
      paddingRight:"20px",
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
  triggerButtonStyle =()=>{
    return{
      marginLeft:"20px",
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

  onSubmit = (e) => {
    e.preventDefault();
        if(this.state.title !== ""){
            this.props.addSub(this.props.todo.id, this.state.title,this.state.weight);
            this.setState({ title: '', weight:0 });
        }else{
            alert("Cyka blet cant be empty")
        }
}
    
onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentWillMount(){
    this.props.findWeight(this.props.todo.id)
  }

  componentDidUpdate(){
    //this.props.findWeight(this.props.todo.id)
  }
  render(){
    const {id, desc, weight, completed } = this.props.todo;
    return (
        <React.Fragment>
          <div style={this.headerStyle()}>
            <p>Done? | Desc | Weight | Del 
              <Popup trigger={<button style={this.triggerButtonStyle()} className="buttonStyle" >Add item</button>} position="top center"  >
                <div>
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
                <input type="number" placeholder="Weight" name="weight" min="1" max="10" onChange={this.onChange}></input>
                <input 
                type="submit" 
                value="Submit" 
                className="btn"
                //style={{flex: '1'}}
                />
            </form>
                </div>
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
