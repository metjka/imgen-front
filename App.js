import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {

    constructor() {
        super();
        this.state = {red: ''};
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({kek: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>{this.state.kek}</h1>
                <hr/>
                <Slider update={this.update}/>
            </div>
        );
    }
}

const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update}/>
            <h1>
                {props.kek}
            </h1>

        </div>);
};

class Slider extends React.Component {
    render() {
        return (
            <input type="range"
                   min="0"
                   max="255"
                   onChange={this.props.update}/>
        );

    }
}

export default App
