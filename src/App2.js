import React from 'react';
import ReactDom from 'react-dom';
class App2 extends React.Component {

    constructor() {
        super();
        this.state = {
            red: 0
        };
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDom.findDOMNode(this.refs.red.refs.input).value,
        })
    }

    render() {
        return (
            <div>
                <NumberInput
                    ref="red"
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.red}
                    label="Red"
                    type={'range'}
                    update={this.update}/>
                <br/>
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

class NumberInput extends React.Component {

    render() {
        let label = this.props.label !== '' ? <label> {this.props.label} - {this.props.val}</label> : '';
        return (
            <div>
                <input ref="input"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       defaultValue={this.props.val}
                       onChange={this.props.update}/>
                {label}
            </div>
        );

    }
}

NumberInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range']),
};

NumberInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
};

const Heart = ()=> <span className="glyphicon glyphicon-thumbs-up"> </span>;

export default App2
