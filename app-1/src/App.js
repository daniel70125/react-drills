import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: "",
      text: ""
    }
  }

  updateInput(val){
    this.setState({
      userInput: val
    })
  }


  render(){
    console.log(this.state)
    return (
      <div className="App">
       <input onChange={(e) => this.updateInput(e.target.value)}/>
       <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
