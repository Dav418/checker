import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

class AddChecklist extends Component{
    
   
        // init state
        state = {
          addNew: false,
          title:''
        }
        onSubmit = (e) => {
            e.preventDefault();
            console.log(this.props)
            this.props.addNewList(this.state.title);
            this.setState({ title: '' });
          }
        
          onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    openAddNew = ()=>{
        const stateAddNew = this.state.addNew;
        this.setState({addNew : !stateAddNew})
    }
    render(){
        
            return(<Popup trigger={<button> Add new checklist</button>} position="bottom center" >
            <div 
            //style={this.popupStyle()}
            >
                
                <form onSubmit={this.onSubmit} 
                //style={{ display: 'flex' }}
                >
                <input 
                type="text" 
                name="title" 
                placeholder="Add Todo ..." 
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