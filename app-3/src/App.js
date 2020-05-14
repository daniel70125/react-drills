import React, { Component} from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      elements: ["Apples", "Apricot", "Beans", "Hammer"],
      filtered: ""
    }
  }

  filterOut(val){
   this.setState({
     filtered: val
   })
  }

  render(){
    const elm = this.state.elements.filter((e) => {
    return e.toLowerCase().includes(this.state.filtered);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return (
      <div className="App">
        
        <input onChange={(e) => this.filterOut(e.target.value)} />
        {elm}
      </div>
    );
  }
}

export default App;
