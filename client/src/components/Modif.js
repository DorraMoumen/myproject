
import React,{useState,useEffect} from 'react'
import { Form,Modal,Button } from 'react-bootstrap';
import axios from 'axios'
const Modif = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nom, setNom] = useState(props.nom);
  const [prenom, setPrenom] = useState(props.prenom);
 
 
  const handleChange = async() => {
   await axios.put(`http://localhost:5000/api/updateProfil/${props.id}`,{nom:nom,prenom:prenom})
 await handleClose()
 await  window.location.reload()
  }
  return (
    <div>
    <Button variant="primary" onClick={handleShow} style={{ width:"200px"}}>
    Mettre à jour
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modifier données</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nom : </Form.Label>
    <Form.Control type="text" placeholder="Enter title" value={nom} onChange={(e)=>setNom(e.target.value)} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Prenom: </Form.Label>
    <Form.Control type="text" placeholder="Enter title" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
  </Form.Group>

 

</Form>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Fermer
      </Button>
      <Button variant="primary" onClick={handleChange}>
        Enregistrer 
      </Button>
    </Modal.Footer>
  </Modal>
    </div>
  )
}

export default Modif