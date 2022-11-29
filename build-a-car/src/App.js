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
      <Car />
      <Bicycle />
      <Bus />
      <Truck />
      <Skateboard />
    </div>
  );
}

export default App;
