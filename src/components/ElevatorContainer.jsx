import React from 'react';
import Elevator from './Elevator'
import { ElevatorContext } from '../contexts/ElevatorContext';

const ElevatorContainer = (props) => {
  console.log('elevator container', props)




  // if (ref.current != null) {
  //   for (let i = 0; i < ref.current.children.length; i++) {
  //     setElevatorData(elevatorData => ({ ...elevatorData, [i]: { status: 'idle', y: parseInt(ref.current.children[i].style.top.replace("px", "")) || 0 } }))
  //     // currentPosition[i] = { y: parseInt(ref.current.children[i].style.top.replace("px", "")) || 0, status: 'idle' };
  //   }
  // }
  // console.log(elevatorData);


  // const currentPosition = {};
  // const elv = Math.floor(Math.random() * 5) + 1


  // React.useEffect(() => {
  //   if (ref.current != null) {
  //     for (let i = 0; i < ref.current.children.length; i++) {
  //       currentPosition[i] = { y: parseInt(ref.current.children[i].style.top.replace("px", "")) || 0, status: 'idle' };
  //     }


  //   }
  //   for (let i = 0; i < ref.current.children.length; i++) {
  //     if (ref.current.children[i].id == elv) {
  //       currentPosition[i].status = 'busy';
  //       ref.current.children[i].style.top = props.dest + 'px';
  //     }
  //   }

  // }, [currentPosition, elv, props.dest]);


  // const ref = React.useRef(null)
  // const [elvPositions, setElvPositions] = React.useState(() => {
  //   return [...Array(5).keys()].map(x => {
  //     return { id: x, y: 0, status: 'idle' }
  //   })
  // });

  // if (ref.current != null) {
  //   for (let i = 0; i < ref.current.children.length; i++) {
  //     if (ref.current.children[i].id == props.elevatorId) {

  //       ref.current.children[i].style.top = props.dest + 'px';
  //     }
  //   }
  // }

  // React.useEffect(() => {

  //   // console.log(elvPositions)

  //   // for (let i = 0; i < ref.current.children.length; i++) {
  //   //   if (ref.current.children[i].id == props.elevatorId) {
  //   //     ref.current.children[i].style.top = props.dest + 'px';
  //   //   }
  //   // }


  // }, [props.dest, props.elevatorId])

  const ref = React.useRef(null)
  const [elevators, setElevators] = React.useState(() => {
    return [...Array(5).keys()].map(x => {
      return { id: x, y: props.dest, status: 'idle' }
    })
  });

  console.log(props)
  let newArr = [...elevators];
  newArr[2] = { id: 2, y: props.dest, status: 'idle' }
  if (JSON.stringify(newArr) != JSON.stringify(elevators)) {
    setElevators(newArr)
  }

  const getDestForElv = (id) => {
    return elevators[id].y;
  }

  return (
    <div className="elevator-container" ref={ref}>
      {
        elevators.map(i => (
          <Elevator key={i.id} id={i.id} dest={getDestForElv(i.id)} />
        ))
      }
    </div>
  );
}

export default React.memo(ElevatorContainer);
// status={elevatorData[i].status} dest={elevatorData[i].dest} position={elevatorData[i].y}