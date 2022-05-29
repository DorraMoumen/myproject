import React, { useState } from 'react';
import { Navbar, NavbarBrand ,NavLink   } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import solvy from "../assets/solvy1.png";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  
    FiLogOut,
    
  } from "react-icons/fi";
  import {
    MenuItem,
  } from "react-pro-sidebar";


const Navbarprofile = (props) => {

    console.log(props.email);
  

  
 
  const sedeconnecter = () => { localStorage.clear()}
    
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="">Solvy </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href=""><Link to='/List'> Accueil </Link></Nav.Link>
      <Nav.Link href=""><Link to={{ pathname:'/upload', state:{email:props.email}}} >Profile</Link></Nav.Link>
      <Nav.Link href=""><MenuItem  onClick={sedeconnecter}><Link to="/" >Déconnecter</Link></MenuItem></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div className='row'>  -   </div>
    </div>
  )
}

export default Navbarprofile
