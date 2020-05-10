import React from 'react';
import Floor from './Floor';
import ElevatorContainer from './ElevatorContainer';
import ElevatorContextProvider from '../contexts/ElevatorContextProvider';
import { ElevatorContext } from '../contexts/ElevatorContext';

function Building(props) {

    const { addDest } = React.useContext(ElevatorContext);

    const callElevator = (e) => {
        addDest(e.target.getBoundingClientRect().y);
    }

    return (

        <div className="building">
            <div className="floors">
                <Floor handleClick={callElevator} id="1" />
                <Floor handleClick={callElevator} id="2" />
                <Floor handleClick={callElevator} id="3" />
                <Floor handleClick={callElevator} id="4" />
                <Floor handleClick={callElevator} id="5" />
                <Floor handleClick={callElevator} id="6" />
                <Floor handleClick={callElevator} id="7" />
            </div>

            <ElevatorContainer />
        </div>

    );
}

export default Building;
