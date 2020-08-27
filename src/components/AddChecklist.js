import React, { Component } from 'react';


class AddChecklist extends Component{
    constructor (props) {
        super(props)
   
        // init state
        this.state = {
          addNew: false,
        }
    }
    openAddNew = ()=>{
        const stateAddNew = this.state.addNew;
        this.setState({addNew : !stateAddNew})
    }
    render(){
        const {addNew} = this.state
        if(!addNew){
            return(<button onClick={this.openAddNew.bind(this)}>Create new</button>)
        }else{
            return (<button onClick={this.openAddNew.bind(this)}>x</button>)
        }
    }

}

export default AddChecklist;