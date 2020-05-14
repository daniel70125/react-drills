import React, { Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            user: "",
            passw: ""
        }
    }

    updateUser(val){
        this.setState({
            user: val
        })
    }
    updatePass(val){
        this.setState({
            passw: val
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <span>Username: </span>
                <input onChange={(e) => this.updateUser(e.target.value)} />
                <span>Password: </span>
                <input onChange={(e) => this.updatePass(e.target.value)}/>
                <button onClick={() => alert(`Username: ${this.state.user} Password: ${this.state.passw}`)}>Login</button>
            </div>
            
            
        )
    }
}

export default Login;