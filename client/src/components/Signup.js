import React, { Component } from "react";
import { Container, Form, FormGroup, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Col } from "react-bootstrap";
import axios from "axios" ;
import { Link } from "react-router-dom";
const  SignUp =() =>{
      const [Nom,setNom]=useState('')
      const [prenom,setPrenom]=useState('')
      const [Email,setEmail]=useState('') 
      const [Motdepasse,setMotdepasse]=useState('') 
      const [Genre,setGenre]=useState('') 
     
      const HandleSubmit = async() => { 
     try {
      await axios.post("http://localhost:5000/api/user/register",{nom:Nom,prenom:prenom,email:Email,motdepasse:Motdepasse,genre:Genre})
     alert("Bienvenue sur SOLVY !") 
    } catch (error) {
       alert(error.response.data.msg)
     }
        
      }
        return (
            <div id="all">
            <Container  id="main-container" className="d-grid h-100 ">
            <form  id="forms" className="text-center w-100">
                <h3 style={{color: "Black"}} className=" mb-3 fs-3 fw-normal" id="label">S'inscrire</h3>
                
               
                <Row>
                <Col>
                <Form.Group className="mb-3" >
                <Form.Label>Nom:</Form.Label>
                <Form.Control type="text" size="lg"  placeholder="votre Nom" className="position-relative" onChange={(e)=>{setNom(e.target.value)}}/>
              </Form.Group>
              
              </Col>
              <Col>
               
              <Form.Group className="mb-3" >
              <Form.Label>Prénom:</Form.Label>
              <Form.Control type="text" size="lg" placeholder="votre Prénom" className="position-relative" onChange={(e)=>{setPrenom(e.target.value)}} />
            </Form.Group>
            
             </Col>
             </Row>
            <Row>
            <Col >
            
                <Form.Group className="mb-3" controlId="sign-up-email-adress">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email"  size="lg" placeholder="Entrer votre email"  className="position-relative" onChange={(e)=>{setEmail(e.target.value)}}/>
                </Form.Group>
            
              </Col>
              </Row>
              <Row>
              <Col>
          
                <Form.Group className="mb-3" controlId="sign-up-email-password">
                  <Form.Label>Mot de passe </Form.Label>
                  <Form.Control type="password" size="lg" placeholder=" Votre Mot De Passe doit contenir au moins 8 caractères "  className="position-relative"  onChange={(e)=>{setMotdepasse(e.target.value)}}/>
                </Form.Group>
              
               </Col>
               </Row>
               <Row>
               <Col>
                <Form.Label>Genre </Form.Label>
              </Col>
           
              <Col >
                    <div key={'radio'} className="d-flex justify-content-center">
                      <Form.Check type={'radio'} >
                        <Form.Check.Input type={'radio'} isValid onChange={(e)=>{setGenre("f")}}/>
                        <Form.Check.Label >{'Femme'}</Form.Check.Label>
                      </Form.Check>
                    </div> 
                </Col>
                <Col >
                    <div key={'radio'} className="d-flex justify-content-center">
                      <Form.Check type={'radio'} >
                        <Form.Check.Input type={'radio'} isValid onChange={(e)=>{setGenre("g")}} />
                        <Form.Check.Label  >{'Homme'}</Form.Check.Label>
                      </Form.Check>
                    </div>
                  </Col>
                  </Row>


              <div className="d-grid">
                <Button variant="primary" size="lg" onClick={HandleSubmit}>
                  S'inscrire
                </Button>
              </div>
              <Link to='/'> <a href=""> Vous avez déjà un compte ! </a></Link>
              <p className="mt-5 text-muted">&copy; 2021-2022</p>
            </form>
            </Container>
</div>
        )};

export default SignUp
