import React, {Component} from 'react';
import List from "./components/ListCont";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import {v4 as uuid} from 'uuid';
class App extends Component {

  state ={
    items :
    [
      {id: uuid(),
      desc: "Eat food",
      weight : 0,
      completed : false,
      additionalItems:[
        {id:uuid(), desc:"take bread and put it in the toaster", weight: 91, completed:false},
        {id:uuid(), desc:"spread jam", weight: 1, completed:false},
        {id:uuid(), desc:"thank xqc", weight: 1, completed:false}     
      ]
    },

    {id: uuid(),
      desc: "Example empty and long text to see what would happen when the text is so long like this",
      weight : 10,
      completed : false,
      additionalItems:[]
    },
    

    {id: uuid(),
      desc: "Make pizza",
      weight : 10,
      completed : false,
      additionalItems:[
        {id:uuid(), desc:"make the dough", weight: 1, completed:false},
        {id:uuid(), desc:"spread the tomato", weight: 1, completed:false},
        {id:uuid(), desc:"add peperoni", weight: 1, completed:false}, 
        {id:uuid(), desc:"add put in the oven", weight: 1, completed:false}, 
        {id:uuid(), desc:"make sure its cooked", weight: 1, completed:false},
        {id:uuid(), desc:"eat", weight: 1, completed:false},     
      ]
    },
    {
      id:uuid(),
      desc:"kick ass", 
      weight:5,
      completed:false,
      additionalItems:[
        {id:uuid(), desc:"punch jeb", weight: 1, completed:false},
        {id:uuid(), desc:"rest for 10 min", weight: 1, completed:false},
      ]
    }
  ]};

  findWeight = id =>{
    let weight = 0;
    let copyArr = [...this.state.items];
    copyArr.forEach(item =>{
      if (item.id === id){
        console.log("Calculating the weight of " + item.desc)
        item.additionalItems.forEach(adItm =>{
          console.log(adItm.weight)
          weight += adItm.weight;
        })
        item.weight = weight;

        console.log("it is " + item.weight)
      }
    })
    this.setState({
      items:[...this.setState.items = copyArr]
    }) 
  }
  addNewList = d => {
    const newItem = {id:uuid(), desc:d, weight:0, completed:false, additionalItems:[]}
    this.setState({ items: [...this.state.items, newItem] });
  };

  addSub = (parentID ,d, w) =>{
    w = Number(w)
    const newSub = {id:uuid(), desc: d, weight: w, completed:false}
    let copyArr = [...this.state.items];
    copyArr.forEach(item =>{
      if (item.id === parentID){
        item.additionalItems.push(newSub);
      }
    })
    this.setState({
      items:[...this.setState.items = copyArr]
    })  
    this.findWeight(parentID)
  }

  markAsCompleted = id =>{
    this.setState({
      items: this.state.items.map(item=>{
        if(item.id === id){
          item.completed = !item.completed;
        }
        item.additionalItems.map(i =>{
          if (i.id === id){
            i.completed =!i.completed;
          }
          return i;
        })
        return item;
      }), 
    })
  }

  delItem = id =>{
    this.setState({
      items:[...this.state.items.filter(item=> item.id !==id )]
    })
  }

  delSubItem = id =>{
    let copyArr = [...this.state.items];
    copyArr.forEach(item => {
      var index = item.additionalItems.findIndex( adItm => {
        return adItm.id === id;
      })
        if (index !== -1) item.additionalItems.splice(index, 1);
      });
    this.setState({
      items:[...this.setState.items = copyArr]
    })  
  }

  render(){
    return (
    <Router>
      <div className="App">
        <div className="cont">
          <Header addNewList = {this.addNewList}/>
          <Route
          exact path="/"
          render={props =>( 
            <React.Fragment>
              <List
              todo={this.state.items}
              markAsCompleted = {this.markAsCompleted}
              delItem ={this.delItem}
              delSub = {this.delSubItem}
              findWeight = {this.findWeight}
              addSub = {this.addSub}
              />
            </React.Fragment>
            )}>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </div>
      </div>
    </Router>
      
    );
  }
  
}

export default App;
