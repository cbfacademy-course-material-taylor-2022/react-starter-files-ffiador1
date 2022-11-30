import React from 'react'
import Wheel from './Wheel';

export default function Skateboard(props) {
    let wheels = [];
    for (let i=0; i<props.numberOfWheels; i++){
        wheels.push(<Wheel key={i}/>)
    }

 return <>
 <h2>Hey, I am a Skateboard! I have {''}{props.numberOfWheels} wheels</h2>;
 {wheels}
 </>
}
