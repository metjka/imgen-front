import React from 'react'
import {Link, hashHistory} from 'react-router'

import Constants from './const.json'

class MainForm extends React.Component {

    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.user)
        };
    }

    render() {
        return (
            <div>
                <UserForm name={this.state.user['username']} token={this.state.user['token']}/>
            </div>
        )
    }
}

class UserForm extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>{this.props.name}</h1>
                <h1>{this.props.token}</h1>
                <img draggable="true"  src={Constants['imagestoreurl'] + this.props.name }/>
            </div>
        )
    };

}

UserForm.propsTypes = {
    name: React.PropTypes.string,
    token: React.PropTypes.string
};


class NavBar extends React.Component {

    constructor(){
        super();
        this.logOut = this.logOut.bind(this);
        this.redirectToUploadScreen = this.redirectToUploadScreen.bind(this);
    }

    logOut(e){
        localStorage.clear();
        hashHistory.push('/')
    }
    redirectToUploadScreen(){
        hashHistory.push('/upload')
    }

    render() {
        return (
            <ul>
                <li><a href="#">User</a></li>
                <li><a href="#" onClick={this.redirectToUploadScreen}>Upload Image</a></li>
                <li><a href="#" onClick={this.logOut}>Log out</a></li>
            </ul>)
    }
}
export default MainForm