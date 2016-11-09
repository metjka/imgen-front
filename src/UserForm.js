import React from 'react'
import NavBar from "./NavBar"
import * as C from './C'
class UserGalleryForm extends React.Component {

    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.user)
        };
    }

    render() {
        return (
            <div>
                <NavBar username={this.state.user['username']}/>
                {/*<UserForm name={this.state.user['username']}/>*/}
            </div>
        )
    }
}

class UserForm extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.token}</h1>
                <img
                    id="avatar"
                    src={C.IMAGE_STORE_DEV + '/v1/image/avatar?username=' + this.props.name }
                    height="50"
                    width="50"
                />
            </div>
        );
    };

}

UserForm.propsTypes = {
    name: React.PropTypes.string,
};

export default UserGalleryForm