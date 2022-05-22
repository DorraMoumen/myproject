
import React,{useState} from 'react'
import { Form,Modal,Button } from 'react-bootstrap';
import axios from 'axios'
const Update = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [titre, setTitre] = useState(props.titre);
  const [universite, setUniversite] = useState(props.universite);
  const [specialite, setSpecialite] = useState(props.specialite);
  const [description, setDescription] = useState(props.description);
  const [approved, setApproved] = useState(props.approved);
  const handleChange = async() => {
   await axios.put(`http://localhost:5000/update/${props.id}`,{titre:titre,universite:universite, specialite:specialite ,description:description,approved:approved})
   await console.log("test",approved);
   await  window.location.reload()
  }
  return (
    <div>
    <Button variant="primary" onClick={handleShow} style={{ width:"200px"}}>
    Mettre à jour
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>modifier données rapport</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Titre : </Form.Label>
    <Form.Control type="text" placeholder="Enter title" value={titre} onChange={(e)=>setTitre(e.target.value)} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Université : </Form.Label>
    <Form.Control type="text" placeholder="Enter title" value={universite} onChange={(e)=>setUniversite(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Spécialité : </Form.Label>
  <Form.Control type="text" placeholder="Enter title" value={specialite} onChange={(e)=>setSpecialite(e.target.value)} />
</Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description :</Form.Label>
    <Form.Control type="text" placeholder="enter description" value={description} onChange={(e)=>setDescription(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
</Form>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Fermer
      </Button>
      <Button variant="secondary" onClick={(e)=>{setApproved(true);alert("le fichier est validé")}}>
        valider
      </Button>
      <Button variant="primary" onClick={handleChange}>
        Enregistrer 
      </Button>
    </Modal.Footer>
  </Modal>
    </div>
  )
}

export default Update 