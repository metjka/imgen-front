import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDom.findDOMNode(this.refs.red.refs.input).value,
            green: ReactDom.findDOMNode(this.refs.green.refs.input).value,
            blue: ReactDom.findDOMNode(this.refs.blue.refs.input).value,
        })
    }

    render() {
        return (
            <div>
                <Slider ref="red" update={this.update}/>
                <br/>
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update}/>
                <br/>
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update}/>
                <br/>
                {this.state.blue}
                <br/>
                

                <Button>I <Heart/> Ok</Button>
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.children}</button>
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
            <input ref="input" type="range"
                   min="0"
                   max="255"
                   start="0"
                   onChange={this.props.update}/>
        );

    }
}

const Heart = ()=> <span className="glyphicon glyphicon-thumbs-up"> </span>;

export default App
