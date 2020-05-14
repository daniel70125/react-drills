import React, { Component } from 'react';
import List from './List'
import Todo from './Todo'
import NewTask from './NewTask'
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      list: []
    };

    this.addList = this.addList.bind(this);
  }

  addList(val){
    this.setState({
      list: [...this.state.list, val]
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <NewTask task={this.addList}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
