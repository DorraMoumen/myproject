import React from 'react'
import { Container , Form , Row,Col,Button } from 'react-bootstrap';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
const test = () => {
    const [Université,setUniversite]=useState('') 
      const [Description,setDescription]=useState('') 
      const [Specialite,setSpecialite]=useState('') 
      const HandleSubmit = async() => { 
        try {
        const res= await axios.get("http://localhost:5000/api/user/login",{universite:Université,description:Description,specialite:Specialite})
        await console.log( res.data.token);
        await localStorage.setItem('token', res.data.token);
         alert("Votre demande a été bien enregistré Merci pour votre confiance   ")
        } catch (error) { 
          alert(error.response.data.msg)
        }}

  return (
    <div> <Container  id="main-container" className="d-grid h-100 ">
                <Form id="forms" className="text-center w-100">
                    <h3 style={{color: "Black"}} className="  mb-3 fs-3 fw-normal" id="label">Remplir ce formulaire pour télécharger votre rapport </h3>
                    <Row >
                         <Col >
                         <div className="form-group">
                               <Form.Group className="mb-3" controlId="université">
                                  <Form.Label>Université :</Form.Label>
                                  <Form.Control type="text" size="lg" placeholder=" ..." className="position-relative" onChange={(e)=>{setUniversite(e.target.value)}}/>
                               </Form.Group>
                               </div>
                         </Col>
                         <Row>
                         <Col >
                         <div className="form-group">
                               <Form.Group className="mb-3" controlId="description ">
                                  <Form.Label>Description:</Form.Label>
                                  <Form.Control type="text" size="lg" placeholder=" ... " className="position-relative" onChange={(e)=>{setDescription(e.target.value)}}/>
                               </Form.Group>
                               </div>
                         </Col>
                         </Row>
                         <Row>
                         <Col>
                         <div className="form-group">
                               <Form.Group className="mb-3" controlId="Specialite ">
                                  <Form.Label>votre spécialité :</Form.Label>
                                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Informatique ' onChange={(e)=>{setSpecialite("info")}} />
                                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Gestion' onChange={(e)=>{setSpecialite("ges")}} />
                                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Economie' onChange={(e)=>{setSpecialite("eco")}} />
                               </Form.Group>
                         </div>
                         </Col>
                         </Row>
                    </Row>
                    <div className="vr" />
                    <Row> 
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label style={{color:"white"}}> veuillez télécharger votre fichier : </Form.Label>
                    <Form.Control type="file"  />
                  </Form.Group>
                  </Row>
                  <Row>
                    <Col >
                    <div className="d-grid">
                    <Button variant="primary" size="lg" onClick={HandleSubmit}> Envoyer une demande  </Button>
                    </div>
                   </Col>
                    </Row>
                    <p className="mt-5 text-muted">&copy; 2021-2022</p>
                </Form>
                </Container>
    
    
    
    </div>
  )
}

export default test