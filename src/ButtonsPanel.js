import React from 'react';

const ButtonsPanel = props => {

    
    return (
        <div className='buttons-panel'>
            To jest panel przycisków
            <button onClick={props.changeValue}>Add {props.currentStep}</button>
            <button onClick={()=>props.resetValue(true)}>Set 0</button>
            <button onClick={()=>props.resetValue(false)}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;


