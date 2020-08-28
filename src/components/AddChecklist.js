import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        const {addNew} = this.state
        if(!addNew){
            return(<button onClick={this.openAddNew.bind(this)}>Create new</button>)
        }else{
            return (
                <React.Fragment>
                    <form onSubmit={this.onSubmit} 
                    //style={{ display: 'flex' }}
                    >
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo ..." 
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    //style={{flex: '1'}}
                    />
                </form>
                    <button onClick={this.openAddNew.bind(this)}>x</button>
                </React.Fragment>
                
            )
        }
    }

}

AddChecklist.propTypes = {
    addNewList: PropTypes.func.isRequired
  }

export default AddChecklist;