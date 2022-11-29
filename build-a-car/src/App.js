import './App.css';
import React from 'react'
import Car from "./components/Car";
import Bicycle from "./components/Bicycle";
import Bus from "./components/Bus";
import Truck from "./components/Truck";
import Skateboard from "./components/Skateboard";

function App() {
  return (
    <div className="App">
      <Car numberOfWheels="4"/>
      <Bicycle numberOfWheels="2"/>
      <Bus numberOfWheels="4" />
      <Truck numberOfWheels="4"/>
      <Skateboard numberOfWheels="2"/>
    </div>
  );
}

export default App;
