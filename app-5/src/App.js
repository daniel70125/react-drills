import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }
  render(){
    return (
      <div>
        <Image src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg'} />
      </div>
    )
  }
}

export default App;
