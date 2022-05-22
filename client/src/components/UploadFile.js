import React, { PureComponent } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export class UploadFile extends PureComponent {
  render() {
    return (
      <div>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{color:"white"}}>Nom de votre projet:</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{ color:"white"}}>Description : </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label style={{color:"white"}}> veuillez télécharger votre fichier : </Form.Label>
    <Form.Control type="file"  />
  </Form.Group>
  <Button variant="success" type="submit">
           Envoyer une demande 
        </Button>
</Form>
 
      
      </div>
    )
  }
}

export default UploadFile