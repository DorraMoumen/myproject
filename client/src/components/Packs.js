import React, { PureComponent } from 'react';
import { Container , Row , Col } from 'react-bootstrap'
export class Packs extends PureComponent {
  render() {
    return (
      <div>
      
      <Container>
  
  <Row style={{color:"white" , textAlign:"center"}}>
    <Col sm>PACK BRONZE
      vous permet un accès à un seul Rapport de projet de fin d'étude seulement à 400 millimes</Col>

    <Col sm>PACK GOLDEN</Col>
    <Col sm>PACK SILVER</Col>
  </Row>
</Container>
      
      
      </div>
    )
  }
}

export default Packs