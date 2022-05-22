import React from 'react'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Home.css"
const Home = () => {
  return (
    <div>
    <div className="maincontainer">
    <div className="container-fluid">
        <div className="row no-gutter">    
        <div className='container1 col-md-6 d-none d-md-flex bg-image'>
        <img src='https://media.istockphoto.com/photos/text-welcome-aboard-on-the-blackboard-on-the-desk-picture-id1148807607?k=20&m=1148807607&s=612x612&w=0&h=5okaQzIE8dgzBPippT9ZKHG3O_TgAk2wX2lecl-wc7I='></img>
        </div>       
            <div className="col-md-6">
                <div className="login d-flex align-items-center py-5">        
                    <div className="container">
                        <div className="row">
                            <div className=" container2 col-lg-12 col-xl-12 mx-auto">
        
                                <Nav >
                                <Nav.Item>
                                  <Nav.Link href="/home" className='header'>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link href="/link-1" className='header'>About us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link href="/link-2" className='header'>Our services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/link-3" className='header'>Contact</Nav.Link>
                              </Nav.Item>
                              </Nav>
                              <div className='content'>
                              <h1>Welcome</h1>
                              <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                              </p>
                              
                              </div>
                              <div className='footer'>
                              <i className="fa fa-facebook-square" style={{fontSize:"36px"}}></i>
                              <i className="fa fa-instagram" style={{fontSize:"36px"}}></i>
                              <i className="fa fa-twitter-square" style={{fontSize:"36px"}}></i>
                              </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Home