import React, { Component } from 'react'

class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input: ""
        };

        this.updateInput = this.updateInput.bind(this);
    }

    updateUI(val){
        this.setState({
            input: val
        })
    }

    updateInput(val){
        this.props.task(this.state.input)
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <input value={this.state.input} onChange={(e) => this.updateUI(e.target.value)}/>
                <button onClick={(e) => this.updateInput(e.target.value)}>Click Me</button>
            </div>
        )
    }
}

export default NewTask