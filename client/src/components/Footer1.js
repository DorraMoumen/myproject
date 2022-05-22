import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  
} from "./FooterStyles";
  
const Footer1 = () => {
  return (
    <Box>
      
      
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">mail</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
           
          </Column>
        </Row>
        
         <p style={{textAlign:"center" , color:"white"}}> &copy; {new Date().getFullYear()} Copyright:</p> <a href="https://www.mdbootstrap.com" style={{textAlign:"center" , textDecoration:"none" , color:"whitesmoke"}}> MDBootstrap.com </a>
        
      </Container>
    </Box>
  );
};
export default Footer1;