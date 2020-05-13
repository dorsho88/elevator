import React from 'react';
import { ElevatorContext } from '../contexts/ElevatorContext';

const Elevator = (props) => {
  console.log('elevator')
  const ref = React.useRef(0);
  const [elvData, setElvData] = React.useState(() => {
    return { y: props.dest, status: 'idle' }
  })

  React.useEffect(() => {
    let newArr = { ...elvData };
    newArr = { y: props.dest, status: 'idle' }
    if (JSON.stringify(newArr) != JSON.stringify(elvData)) {
      setElvData(newArr)
    }

    if (ref.current) {
      ref.current.style.top = elvData.y + 'px';
    }

    if (ref.current.style.top != elvData.y) {
      newArr = { y: props.dest, status: 'busy' }
    }

  }, [elvData, elvData.y, props.dest, props.id])

  return (
    <div className="elevator" id={props.id} ref={ref} status={elvData.status}>
      LIFT
    </div>
  );
};

export default React.memo(Elevator);
