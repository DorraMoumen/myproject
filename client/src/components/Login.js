import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row ,Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {BgImage} from "../assets/library.png"

import { FormText } from "react-bootstrap";
const Login =(props)=> {
   
  const [email,setEmail]=useState('') 
  const [Motdepasse,setMotdepasse]=useState('') 
  

  const HandleSubmit = async() => { 
 try {
  const res= await axios.post("http://localhost:5000/api/user/login",{email:email,motdepasse:Motdepasse})
 await console.log( res.data.token);
 await localStorage.setItem('token', res.data.token);
 await localStorage.setItem('userId', res.data.userId);
 await localStorage.setItem('isAdmin',res.data.isAdmin);
  alert("Bienvenue entre nous ! ")
 
  localStorage.getItem('isAdmin')==='true'?props.history.push({
  pathname:'/profileAdmin',
  search:'?query=email',
  state:{email:email}

}):props.history.push({
  pathname:'/List',
  search:'?query=email',
  state:{email:email}

})

 } catch (error) { 
   alert(error.response.data.msg)
 }}
        return (
            <div id="all">
            
            <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form className="rounded p-4 p-sm-3">
                <h3 style={{color: "Black"}} className=" mb-3 fs-3 fw-normal" id="label">Se Connecter </h3>
                
                    
                           <Form.Group className="mb-3" controlId="sign-up-email-adress">
                              <Form.Label>Email:</Form.Label>
                              <Form.Control type="email"  placeholder=" votre adresse email" className="position-relative" onChange={(e)=>{setEmail(e.target.value)}}/>
                              <FormText className="text-muted">
                              Nous ne partageons votre email avec personne . 
                              </FormText>
                           </Form.Group>
                           
                     
                     
                           <Form.Group className="mb-3" controlId="sign-up-email-password">
                              <Form.Label>Mot de passe :</Form.Label>
                              <Form.Control type="password"  placeholder=" Votre Mot De Passe  " className="position-relative" onChange={(e)=>{setMotdepasse(e.target.value)}}/>
                              <FormText className="text-muted">
                              Votre mot de passe doit avoir 8 caractères au minimum . 
                              </FormText>
                              </Form.Group>
                           


                             
                             
                              
              
                <div className="vr" />
                 
                
                <div className="d-grid ">
                <Button variant="primary"  onClick={HandleSubmit}> Se Connecter </Button>
                </div>
               
                <Link to='/Signup'> <a href=""> vous n'avez pas de compte ? </a></Link>
                <p className="mt-5 text-muted">&copy; 2021-2022</p>
            </Form>
            </div>
            
       </div> )
    };

export default Login 

// <Link to={{
//   pathname: "/upload",
//   state: {email:email}
// }}> </Link>

// <div className="form-group">
// <label>Email :</label>
// <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value);console.log(Email);}}/>
// </div>

// <div className="form-group">
// <label>Mot de passe :</label>
// <input type="password" className="form-control" placeholder="Enter password"  onChange={(e)=>{setMotdepasse(e.target.value)}}/>
// </div>

            //style={{ "scroll-behavior": "smooth"}}
        