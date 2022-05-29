import React, { PureComponent,useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselStyles.css";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ListGroup , ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import UpdateFile from './UpdateFile';
import {useHistory} from "react-router-dom";
const CardItem = (props) => {
  
  console.log(props.location.state.first);
  const first=props.location.state.first

  const el=props.location.state.el
  console.log('el',el);
  const history = useHistory();
  const Handledelete=()=>{
    axios.delete(`http://localhost:5000/${first._id}`)
    history.goBack()
  }
  const deleteArr=()=>{
    axios.delete(`http://localhost:5000/api/deleteelt/${el}`,{params:{titre:first.titre}})
   Handledelete()
  }

  return (
    
    <div style={{ backgroundColor: "rgb(115, 210, 222)"}} className="row align-items-center justify-content-center">
    <Card style={{ width: '18rem' }}>
   
    <Card.Body>
    <ListGroup >
    <ListGroupItem>
    <Card.Title>Titre :</Card.Title>
       <Card.Text> {first.titre} </Card.Text>
    </ListGroupItem>
       <ListGroupItem>
         <Card.Title>Specialite :</Card.Title>
            <Card.Text> {first.specialite} </Card.Text>
       </ListGroupItem>
      <ListGroupItem>
          <Card.Title>Université :</Card.Title>
         <Card.Text>{first.universite} </Card.Text>
      </ListGroupItem>
      <ListGroupItem>
         <Card.Title>Description :</Card.Title>
            <Card.Text> {first.description} </Card.Text>
       </ListGroupItem>
    
       <ListGroupItem>
       <Button ><UpdateFile id={first._id} titre={first.titre} universite={first.universite} specialite={first.specialite} description={first.description} el={el}/></Button>
       </ListGroupItem>
      <ListGroupItem style={{textAlign:"center"}}>
     <Button  onClick={()=>deleteArr()}>
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