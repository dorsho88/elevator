import React from "react";
import { ElevatorContext } from "./ElevatorContext";

const ElevatorContextProvider = (props) => {
    const [destHeight, setDestHeight] = React.useState();

    const addDest = (dest) => {
        console.log(dest)
        // setDestHeight(destHeight => ({ ...destHeight, dest: dest }))
        setDestHeight(dest)
    };



    return (
        <ElevatorContext.Provider value={{ addDest, destHeight }}>
            {props.children}
        </ElevatorContext.Provider>
    );
};

export default ElevatorContextProvider;
