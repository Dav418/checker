import React, { Component } from 'react';
import HeadItem from './HeadChecker';
import AdditionalItems from './CheckerItem';

class ListCont extends Component{
    addItmStyle = () => {
        return {
          background: "#4D5656",
          padding: "10px",
          fontSize : "14px",
        }
    };
    checkListStyle = () =>{
        return{
            width : "300px",
            float: "left",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
        }
    }
    render(){
        return (this.props.todo.map((item)=>(
            <div style={this.checkListStyle()}>
                <React.Fragment>
                    <HeadItem 
                    key = {item.id} 
                    todo ={item} 
                    markAsCompleted ={this.props.markAsCompleted}
                    delItem = {this.props.delItem}></HeadItem>     
                </React.Fragment>
                {item.additionalItems.map((adItm)=>(
                    <div style={this.addItmStyle()}>
                        <AdditionalItems
                        key={adItm.id}
                        todo={adItm}
                        markAsCompleted ={this.props.markAsCompleted}
                        delSub = {this.props.delSub}/>
                    </div>
                ))}
                
               
            </div>
            
        )))
    }
}

export default ListCont;