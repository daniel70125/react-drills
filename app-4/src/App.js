import React, { Component } from 'react';

import './App.css';
import Login from './Login.js'

class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }
  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Login />
      </div>
    );
  }  
}

export default App;
