import React from 'react';

const Step = props => {
    let numberInput = null;

    return (
        <div>
            Krok: 
            <input ref={(input) => {numberInput = input}} type="number" min = "1" defaultValue={props.initStep}
                onChange={() => props.updateStep(parseInt(numberInput.value))} />
        </div>
    );
}

export default Step;