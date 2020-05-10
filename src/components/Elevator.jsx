import React from 'react';
import { ElevatorContext } from '../contexts/ElevatorContext';

const Elevator = React.forwardRef((props, ref) => {
    console.log('elevator')
    return (
        <div ref={ref} className="elevator" id={props.id}>
            LIFT
        </div>
    );
});

export default Elevator;
