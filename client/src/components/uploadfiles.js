import React, { PureComponent } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export class UploadFiles extends PureComponent {
  render() {
    return ( 
       
      <div>

     <label>Upload Files mongodb </label> 
     <form action='/upload' method='POST' encType='multipart/form-data'>
    <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Importer votre Rapport par là : </Form.Label>
    <Form.Control type="file" />
  </Form.Group>

  <Button variant="success">Envoyer</Button>
  </form>
  <hr>
  </hr>
      </div>
      
    )
  }
}

export default UploadFiles