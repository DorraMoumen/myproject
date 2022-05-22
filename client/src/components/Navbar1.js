import { Navbar , Container } from 'react-bootstrap';
import React, { Component } from 'react';
import {logo1} from "../assets/logo1.png";

export class Navbar1 extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
  
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home" className='float-right'>
      <img src={logo1} style={{width:"30px" ,
    }}  className="d-inline-block align-top  "/>
      E-MORE
     

      </Navbar.Brand>
    </Container>
  </Navbar>



      </div>
    )
  }
}

export default Navbar1 ; 