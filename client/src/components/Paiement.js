import React from 'react'
import {codeqr} from "../assets/codeqr.jpg" ;
import {d17} from "../assets/d17.png" ;
const Paiement = () => {
  return (
    <div>
    <h1> La nouvelle solution de paiement : </h1><img src={d17}/>
   
    <img src={codeqr}/>
    <h2> Scanner QR pour payer : </h2>

    </div>
  )
}

export default Paiement