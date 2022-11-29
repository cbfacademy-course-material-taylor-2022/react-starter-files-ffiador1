import React from 'react'
import Wheel from './Wheel'

export default function Truck(props) {

 return <> <h2>¡Hola, estoy un Truck! Tengo {''}{props.numberOfWheels} wheels</h2>
    <Wheel/>
    <Wheel/>
    <Wheel/>
    <Wheel/>
    <Wheel/>
    <Wheel/>
    <Wheel/>
    <Wheel/>
 </>
}
