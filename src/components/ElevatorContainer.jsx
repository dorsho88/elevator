import React from 'react';
import Elevator from './Elevator'
import { ElevatorContext } from '../contexts/ElevatorContext';

function ElevatorContainer(props) {

    const { destHeight } = React.useContext(ElevatorContext);
    const ref = React.useRef(null)
    // const inputRefs = [];

    // const setRef = (ref) => {
    //     console.log('setting elevator ref')
    //     inputRefs.push(ref);
    // };

    React.useEffect(() => {
        console.log('dsadsa')
        // for (let i = 0; i < inputRefs.length; i++)
        // if (ref.current.id == 1)
        ref.current.style.top = destHeight + 'px';

    }, [destHeight]);
    return (

        < div className="elevator-container" >
            <Elevator ref={ref} id="1" />
            <Elevator id="2" />
            <Elevator id="3" />
        </div >
    );
}

export default ElevatorContainer;
