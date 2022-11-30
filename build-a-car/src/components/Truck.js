import React from 'react'
import Wheel from './Wheel'

export default function Truck(props) {
    let wheels = [];
    for (let i=0; i<props.numberOfWheels; i++){
        wheels.push(<Wheel key={i}/>)
    }

 return <> <h2>¡Hola, estoy un Truck! Tengo {''}{props.numberOfWheels} wheels</h2>
    {wheels}
 </>
}
