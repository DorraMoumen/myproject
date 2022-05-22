// import React, { PureComponent, useState, useEffect } from 'react'
// import { Container,Row ,Col , Button } from 'react-bootstrap';
// import propTypes from 'prop-types';
// import { Form } from 'react-bootstrap';
// import { Accordion  } from 'react-bootstrap';
// import users from '../../../serveur/model/userModel';
// import { MDBCheckbox } from 'mdb-react-ui-kit';
// import axios from 'axios'

// const setStyleInfo ={
//                      color : 'White',
//                      fontFamily:'Montserra, sans-serif' ,
//                      fontSize :'30px',
//                      fontWeight : 'Bold',
// }


// const Profil =()=> {
//   const [Université,setUniversite]=useState('') 
//   const [Description,setDescription]=useState('') 
//   const [Specialite,setSpecialite]=useState('') 
//   const HandleSubmit = async() => { 
//     try {
//     const res= await axios.get("http://localhost:5000/api/user/login",{universite:Université,description:Description,specialite:Specialite})
//     await console.log( res.data.token);
//     await localStorage.setItem('token', res.data.token);
//      alert("Bienvenue entre nous ! ")
//     } catch (error) { 
//       alert(error.response.data.msg)
//     }}
  
//   const [data, setData] = useState([]); // where to store the returned data
//   const [error, setError] = useState(null); // where to store the coming errors
//   useEffect(() => {
//     function fetchData() {
      
//       axios.get("http://localhost:5000/allusers")
//    // when the result comes back with success here is what to do
//         .then(res => setData(res.data))
//         .then(data.filter(user=> user.Email==Email).map(user))
      
    
//         .catch(err => setError(err))// if there is an error here what you have to do.
    
//       }
    
    
//   }, []);

//     return (
//       <div>
// <Container style={{marginTop : '15px' , marginBottom :'auto'}}>
//    <Row>
//    <Col style={{display:'flex' , flexDirection:'column' , alignSelf:'center'}}>
//                  <p style={{fontWeight:'bold' , color :'blue'}}>Vos Données</p> 
//                  <p style={{color:'white'}}> <span style={{color : 'white' ,  fontWeight:'bold'}}> Votre nom : </span> {user.nom}</p>
//                  <p style={{color:'white'}}> <span style={{color:'white' , fontWeight:'bold'}}> Votre email : </span> {user.email} </p>
//                  <p style={{fontWeight:'bold' , color :'blue'}}>Votre rapport : </p>
//                  <p style={{fontWeight:'bold' , color :'blue'}}>Votre solde :   </p>
               
            
   

//             <Container  id="main-container" className="d-grid h-100 ">
//             <Form id="forms" className="text-center w-100">
//                 <h3 style={{color: "Black"}} className=" mb-3 fs-3 fw-normal" id="label">Remplir ce formulaire pour télécharger votre rapport</h3>
//                 <Row >
//                      <Col >
//                      <div className="form-group">
//                            <Form.Group className="mb-3" controlId="université">
//                               <Form.Label>Université :</Form.Label>
//                               <Form.Control type="text" size="lg" placeholder=" ..." className="position-relative" onChange={(e)=>{setUniversite(e.target.value)}}/>
//                            </Form.Group>
//                            </div>
//                      </Col>
//                      <Col >
//                      <div className="form-group">
//                            <Form.Group className="mb-3" controlId="description ">
//                               <Form.Label>Description:</Form.Label>
//                               <Form.Control type="text" size="lg" placeholder=" ... " className="position-relative" onChange={(e)=>{setDescription(e.target.value)}}/>
//                            </Form.Group>
//                            </div>
//                      </Col>
//                      <Col>
//                      <div className="form-group">
//                            <Form.Group className="mb-3" controlId="Specialite ">
//                               <Form.Label>votre spécialité :</Form.Label>
//                               <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Informatique ' onChange={(e)=>{setSpecialite("info")}} />
//                               <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Gestion' onChange={(e)=>{setSpecialite("ges")}} />
//                               <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Economie' onChange={(e)=>{setSpecialite("eco")}} />
//                            </Form.Group>
//                      </div>
//                      </Col>
//                 </Row>
//                 <div className="vr" />
//                 <Row> 
//                 <Col >
//                 <div className="d-grid">
//                 <Button variant="primary" size="lg" onClick={HandleSubmit}> Envoyer une demande  </Button>
//                 </div>
//                </Col>
//                 </Row>
//                 <p className="mt-5 text-muted">&copy; 2021-2022</p>
//             </Form>
//             </Container>
// </Col>
// </Row>
// </Container>
// </div>


            

      
      
      
//     )
//   }
//   Profil.propTypes ={
//     utilisateur : propTypes.string.isRequired ,
//     utilisateur: propTypes.number .isRequired , 
//     utilisateur: propTypes.string.isRequired , 

//   }
//   Profil.defaultProps={
//     utilisateur :'qq chose est écrite là ' ,
//     utilisateur :'qq chose est écrite là ' ,
//     utilisateur :'qq chose est écrite là ' ,
  
//   }


// export default Profil ; 