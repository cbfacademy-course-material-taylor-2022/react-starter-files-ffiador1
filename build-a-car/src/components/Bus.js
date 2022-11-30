import React from 'react'
import Wheel from './Wheel'

export default function Bus(props) {
    let wheels = [];
    for (let i=0; i<props.numberOfWheels; i++){
        wheels.push(<Wheel key={i}/>)
    }
 return <>
    <h2>Hello, I am a Bus! I have {''}{props.numberOfWheels} wheels</h2>
    {wheels}
 </>
}
