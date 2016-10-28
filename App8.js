import React from 'react';
import ReactDom from 'react-dom';
class App8 extends React.Component {

    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('Rendering!');
        return <button onClick={this.update}>{this.state.val}</button>

    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('by!');
    }
}

class Wrapper extends React.Component {

    constructor() {
        super();
    }

    mount() {
        ReactDom.render(<App8/>, document.getElementById('a'));
    }

    unmount() {
        ReactDom.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export  default Wrapper;
