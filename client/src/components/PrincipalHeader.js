import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse ,
  MDBBtn
} from 'mdb-react-ui-kit';
import solvy from "../assets/solvy1.png";
import { Link } from 'react-router-dom';
const PrincipalHeader = () => {
  
    
        const [showNavSecond, setShowNavSecond] = useState(false);
        return(
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src={solvy} style={{width:'200px' ,margin:'2px'}}/></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
            <Link to="/" style={{ color:"black", textDecoration:"none"}} >Accueil</Link>
            </MDBNavbarLink>
            <MDBNavbarLink  href='#'><Link to="/sinscrire" style={{ color:"black", textDecoration:"none"}}  >S'inscrire</Link></MDBNavbarLink>
            <MDBNavbarLink href='#'><Link to="/seconnecter"style={{ color:"black", textDecoration:"none"}}  >Se Connecter</Link></MDBNavbarLink>
            
          </MDBNavbarNav>
        </MDBCollapse>
        <form className='d-flex input-group w-auto'>
          <input type='search' className='form-control' placeholder='. . .' aria-label='Search' />
          <MDBBtn color='dark'>Recherche</MDBBtn>
        </form>
      </MDBContainer>
    </MDBNavbar>
 ) };

export default PrincipalHeader ; 