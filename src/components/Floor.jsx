import React from 'react';
import { ElevatorContext } from '../contexts/ElevatorContext';


const Floor = (props) => {

    console.log('floor')

    return (
        <div className="floor" id={props.id} onClick={props.handleClick}>
            floor
        </div>
    );
};

export default Floor;
