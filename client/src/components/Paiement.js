import React from 'react'
import {codeqr} from "../assets/codeqr.jpg" ;
import {d17} from "../assets/d17.png" ;
const Paiement = () => {
  return (
    <div>
    <img src={d17}/>
    <h2> Scanner QR pour payer : </h2>
    <img src={codeqr}/>


    </div>
  )
}

export default Paiement