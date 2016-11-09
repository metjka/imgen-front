import React from "react"
import {browserHistory} from 'react-router'

class NavBar extends React.Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
        this.redirectToUploadScreen = this.redirectToUploadScreen.bind(this);
    }

    redirectUser(){
        browserHistory.push('/user');
    };

    logOut(e) {
        localStorage.clear();
        browserHistory.push('/');
    }

    redirectToUploadScreen() {
        browserHistory.push('/upload');
    }

    render() {
        return (
            <ul>
                <li><a href='#' onClick={this.redirectUser}>User</a></li>
                <li><a href='#' onClick={this.redirectToUploadScreen}>Upload Image</a></li>
                <li><a href='#' onClick={this.logOut}>Log out</a></li>
            </ul>)
    }
}

export  default NavBar