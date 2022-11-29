import React from 'react'
import Wheel from './Wheel'

export default function Bus(props) {
 return <>
    <h2>Hello, I am a Bus! I have {''}{props.numberOfWheels} wheels</h2>
    <Wheel/>
    <Wheel/>
    <Wheel/>
    <Wheel/>
 </>
}
