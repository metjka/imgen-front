import React from "react";
import Request from "request";

class LoginScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.usernameUpdate = this.usernameUpdate.bind(this);
        this.passwordUpdate = this.passwordUpdate.bind(this);
    }

    usernameUpdate(e) {
        this.setState({username: e.target.value});
        console.log("username: " + this.state.username)
    }

    passwordUpdate(e) {
        this.setState({password: e.target.value});
        console.log("password: " + this.state.password)
    }

    login(e) {
        var username = this.state.username;
        var password = this.state.password;

        var options = {
            url: 'http://localhost:1112/v1/user/auth',
            json: true,
            method: 'POST',
            body: {
                'username': 'Loli',
                'password': 'Loli'
            }
        };

        function callback(error, response, body) {
            // console.log(response.statusCode);
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }

        Request(options, callback);
    }

    render() {
        return (
            <div >
                <input type="text" placeholder="username" onChange={this.usernameUpdate}/>
                <input type="password" placeholder="password" onChange={this.passwordUpdate}/>
                <button type="submit" onClick={this.login}>Submit</button>
                <br/>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }

}


export default LoginScreen