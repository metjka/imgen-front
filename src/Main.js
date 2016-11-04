import React from 'react'

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
                <h1>{this.props.name}</h1>
                <h1>{this.props.token}</h1>
                <img src={'http://localhost:1113/v1/image/avatar?username=' + this.props.name }/>
            </div>
        )
    };

}

UserForm.propsTypes = {
    name: React.PropTypes.string,
    token: React.PropTypes.string
};

export default MainForm