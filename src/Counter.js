import React, { Component } from 'react';

import ButtonsPanel from './ButtonsPanel';
import CounterDisplay from './CounterDisplay';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        let initValue = 0;
        let initStep = 0;

        if(!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }

        if(!isNaN(this.props.initStep)) {
            initStep = parseInt(this.props.initStep);
        }

        this.state = {
            counterValue: initValue,
            counterStep: initStep
        };
    }

    addStep = () => {
        this.setState(prevState=>{
            return({counterValue: prevState.counterValue + this.state.counterStep})
        })
    }

    reset = resetBool => {
        if(resetBool) {
            this.setState({counterValue: 0});
        } else {
            this.setState({counterValue: this.props.initValue});
        }
    }

    updateStep = newStep => {
        this.setState({counterStep: newStep})
    }

    render() {
        return(
            <div className='counter'>
                <CounterDisplay counterCurrentValue={this.state.counterValue} />
                <ButtonsPanel changeValue={this.addStep} resetValue={this.reset} 
                    currentStep={this.state.counterStep} />
                <Step updateStep={this.updateStep} initStep = {this.props.initStep} />
            </div>
        );
    }
}

export default Counter;