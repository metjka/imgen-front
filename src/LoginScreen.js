import React from "react";
import Request from "request";
import styles from './login.css'
import {Link, hashHistory} from 'react-router'

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
        // console.log("username: " + this.state.username)
    }

    passwordUpdate(e) {
        this.setState({password: e.target.value});
        // console.log("password: " + this.state.password)
    }

    login(e) {
        var username = this.state.username;
        var password = this.state.password;

        var options = {
            url: 'http://localhost:1112/v1/user/auth',
            json: true,
            method: 'POST',
            header: {'Origin': window.location.origin},
            body: {
                'username': this.state.username,
                'password': this.state.password
            }
        };

        function callback(error, response, body) {
            // console.log(response.statusCode);
            if (!error && response.statusCode == 200) {
                console.log(body);
                localStorage.setItem('user', JSON.stringify(body));
                hashHistory.push('/user');
            }
        }

        Request(options, callback);
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="username" onChange={this.usernameUpdate}/>
                        <input type="password" placeholder="password" onChange={this.passwordUpdate}/>
                        <button type="button" onClick={this.login}>Submit</button>
                        <p className="message">Not registered? <Link to="/s">Create an account</Link></p>
                    </form>
                </div>
            </div>
        );
    }

}


export default LoginScreen