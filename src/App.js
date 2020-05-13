import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/style.css';
import Building from './components/Building';
// import ElevatorContextProvider from './contexts/ElevatorContextProvider';


function App() {
  return (

    <div className="App">
      {/* <ElevatorContextProvider> */}
      <Building />
      {/* </ElevatorContextProvider> */}
    </div>

  );
}

export default App;
