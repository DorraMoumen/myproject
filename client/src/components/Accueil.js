import React, { PureComponent,useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselStyles.css";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ListGroup , ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import PrincipalHeader from './PrincipalHeader';

  const Accueil = (props) => {
    const [files, setFiles] = useState([])
    useEffect(async() => {

      
        try {
          const res=await axios({
            method:'get',
            url:"http://localhost:5000/getAllFiles",
            json:true
          });
          console.log(res);
          return(setFiles(res.data));
          
        } catch (error) {
          console.error(error);
        }

    }

    , [])
    console.log(files);


      //create a new array by filtering the original array
      const filteredData = files.filter((el) => {
          //if no input the return the original
          if ((props.input1 === '')&&(props.input2 === '') && (el.approved==true) ) {
              return el;
          }
          else {
            return( el.description.toLowerCase().includes(props.input1) && el.specialite.toLowerCase().includes(props.input2) && el.approved==true  )
        }
       
    })
    


    
    return (
      <div style={{ width:"200%" , height:"50%"}}>
      {filteredData.map((elt,key)=><div key={key}>
      
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
  <ListGroup >
     <ListGroupItem>
       <Card.Title>Specialite :</Card.Title>
          <Card.Text> {elt.specialite} </Card.Text>
     </ListGroupItem>
    <ListGroupItem>
        <Card.Title>Université :</Card.Title>
       <Card.Text>{elt.universite} </Card.Text>
    </ListGroupItem>
    <ListGroupItem>
       <Card.Title>Description :</Card.Title>
          <Card.Text> {elt.description} </Card.Text>
     </ListGroupItem>
  
     <ListGroupItem>
     <Button variant="dark">
     <Card.Link href="#">Voir plus</Card.Link>
     </Button>
     </ListGroupItem>
    <ListGroupItem>
    <Button variant="dark">
    <Card.Link href="#">Ajouter Favoris </Card.Link>
    </Button>
    </ListGroupItem>
    <ListGroupItem>
    <Button variant="dark">
    <Card.Link href="#">Ajouter Paniers</Card.Link>
    </Button>
    </ListGroupItem>
 
  </ListGroup>
  </Card.Body>
</Card>
      
      
      
      </div>)}

      </div>
    )
  }

export default Accueil ;