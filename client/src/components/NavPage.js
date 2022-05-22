import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'

const NavPage = (props) => {
  const handlAlert = () => { alert(props.name)}
  return (
    <div id='navpage'>
    <>
    <Navbar bg="transparent" expand="lg" variant='light' >
    <Container fluid >
   
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
         
          navbarScroll 
        >
          <Nav.Link href="#Accueil"  to="/" id='navelement' >ACCUEIL</Nav.Link>
          <Nav.Link href="#s'inscrire"  to="/api/user/register/" id='navelement' >SIGN IN</Nav.Link>
          
            <Nav.Link href="#action3" id='navelement' >ABOUT US</Nav.Link>
            <Nav.Link href="#action4" id='navelement' >CONTACT</Nav.Link>
            
          
          
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
    </div>
  )
}

export default NavPage