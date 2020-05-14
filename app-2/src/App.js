import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      items: ["Apples", "Apricot", "Hammer", "Yarn"]
    }
  }


  render(){
    const elements = this.state.items.map((e) => {
    return <p>{e}</p>
    })
    return (
      <div className="App">
                {elements}
      </div>
    );
  }
}

export default App;
