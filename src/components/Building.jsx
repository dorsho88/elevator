import React from 'react';
import ReactDOM from 'react-dom';
import Floor from './Floor';
import ElevatorContainer from './ElevatorContainer';
import { ElevatorContext } from '../contexts/ElevatorContext';

function Building(props) {
  console.log('building')
  const [dest, setDest] = React.useState(500);
  const floorCount = [...Array(30).keys()]

  const callElevator = (e) => {
    setDest(e.target.getBoundingClientRect().y);
    // setDest(e.target.id); // floor id
  }

  return (

    <div className="building">
      <div className="floors" onClick={callElevator}>
        {
          floorCount.map(x => (
            <Floor key={x} id={x} />
          ))
        }
      </div>
      <ElevatorContainer dest={dest} />
    </div>

  );
}

export default Building;
