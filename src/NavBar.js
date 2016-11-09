import React from "react"
import {browserHistory} from 'react-router'
import * as C from './C'


class NavBar extends React.Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
        this.redirectToUploadScreen = this.redirectToUploadScreen.bind(this);
    }

    redirectUser() {
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
                <li><a className="link" href='#' onClick={this.redirectToUploadScreen}>Upload Image</a></li>
                <li style={{float: 'right', align: 'center'}}>
                    <ul  >
                        <li>
                            <a href="#" onClick={this.redirectUser}>
                                <img
                                    height="30"
                                    width="30"
                                    src={C.IMAGE_STORE_DEV + '/v1/image/avatar?username=' + this.props.username}/>

                            </a>
                        </li>
                        <li>
                            <a className="link" href="#" onClick={this.redirectUser}>{this.props.username}</a>
                        </li>
                        <li><a className="link" href='#' onClick={this.logOut}>Log out</a></li>
                    </ul>

                </li>
            </ul>
        )
    }
}

export  default NavBar