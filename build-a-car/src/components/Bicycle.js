import React from 'react'
import Wheels from './Wheel'

export default function Bicycle(props) {
 return <>
    <h2>Good morning, I am a Bicycle! I have {''}{props.numberOfWheels} wheels</h2>
    <Wheels/>
    <Wheels/>
</>
}