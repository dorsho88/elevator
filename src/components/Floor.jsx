import React from 'react';
import { ElevatorContext } from '../contexts/ElevatorContext';


const Floor = (props) => {
  console.log('floor')
  return (
    <div className="floor" id={props.id} onClick={props.clickHandler}>
      floor
    </div>
  );
};

export default React.memo(Floor);
