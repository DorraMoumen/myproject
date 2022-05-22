import React, { PureComponent,useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselStyles.css";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ListGroup , ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import UpdateFile from './UpdateFile';
import { element } from 'prop-types';
const CardItem = ({elt}) => {
    const [file, setFile] = useState([])
    const [titre, setTitre] = useState(elt)


    useEffect(async() => {

      
        try {
          const res=await axios.get("http://localhost:5000/getFile",{titre:titre});
          console.log(res);
          return(setFile(res.data));
          
        } catch (error) {
          console.error(error);
        }

    }

    , [])
    console.log(file);
    // const deleteFunc= (id) => {
    //     axios.delete(`http://localhost:5000/${id}`)
    //    }
    const filtreArr=(titre)=>{
     
      var newArray = file.filter(function (el)
    {
      return el.titre ==titre

    }
    
    );
    console.log(newArray);
    }
    console.log(filtreArr());

    
   


  return (
    
    <div style={{ width:"200%" , height:"50%"}}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
    <ListGroup >
    <ListGroupItem>
    <Card.Title>Titre :</Card.Title>
       <Card.Text> {file.titre} </Card.Text>
    </ListGroupItem>
       <ListGroupItem>
         <Card.Title>Specialite :</Card.Title>
            <Card.Text> {file.specialite} </Card.Text>
       </ListGroupItem>
      <ListGroupItem>
          <Card.Title>Université :</Card.Title>
         <Card.Text>{file.universite} </Card.Text>
      </ListGroupItem>
      <ListGroupItem>
         <Card.Title>Description :</Card.Title>
            <Card.Text> {file.description} </Card.Text>
       </ListGroupItem>
    
       <ListGroupItem>
       <Button variant="dark">modifier</Button>
       </ListGroupItem>
      <ListGroupItem>
      <Button variant="dark" >
      supprimer 
      </Button>
      </ListGroupItem>
    
    
    </ListGroup>
    </Card.Body>
    </Card>
    
    </div>
    
  )
}

export default CardItem


