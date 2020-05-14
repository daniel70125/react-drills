import React, { Component } from 'react';

import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();

    this.state = {
        taskBox: [],
        input: ""
    }
}

  updateTaskBox(val){
      this.setState({
          input: val
      })
  }
  updateUI(){
    this.setState({
      taskBox: [...this.state.taskBox, this.state.input]
    })
  }
  render(){
    let list = this.state.taskBox.map((e, i) => {
      return <Todo key={i} item={e} />
    })
    console.log(this.state)
    return (
      <div className="App">
        <input onChange={(e) => this.updateTaskBox(e.target.value)} />
        <button onClick={() => this.updateUI()}>Click Me</button>
        
        {list}
      </div>
    );
  }
}

export default App;
