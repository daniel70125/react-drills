import React, { Component } from 'react'
import Todo from './Todo'

class List extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        let elm = this.props.list.map((e) => {
            return <Todo task={e} />
        })
        return (
            <div>
                {elm}
            </div>
        )
    }
}

export default List