import React, { Component } from 'react'

class Todo extends Component {

    render(){
        console.log(this.state);
        return(
            <div>
                <p>{this.props.item}</p>
            </div>
        )
    }
}

export default Todo