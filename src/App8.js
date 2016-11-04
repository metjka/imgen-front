import React from 'react';
import ReactDom from 'react-dom';
class App8 extends React.Component {

    constructor() {
        super();
        this.update = this.update.bind(this);
    }

    update() {
        this.props.val = this.props.val+1;
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('Rendering!');
        return <button onClick={this.update}>{this.props.val1}</button>

    }

    componentDidMount() {
         this.inc = setInterval(this.update, 1000);
    }

    componentWillUnmount() {
         clearInterval(this.inc)
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

Wrapper.defaultProps = {val: 0};

export  default App8;
