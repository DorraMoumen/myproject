
import React, { useState, useRef ,useEffect} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';
import Modif from './Modif';
import { data } from 'jquery';
import f from '../assets/f.png';
import h from '../assets/h.png';
import CardItem from './CardItem';
import Header from './Header1';
import {useHistory} from "react-router-dom";
import Navbarprofile from './Navbarprofile';
const Upload = (props) => {
  let imageURL ="";
  const history = useHistory();
  const email=props.location.state.email
  console.log(email);
  const [first, setfirst] = useState({})
  const [arr, setArr] = useState([]); // state for storing actual image
    const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    titre:'',
    universite: '',
    specialite: '',
    description: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area
const [data,setData]=useState({})

// useEffect(async() => {

    
//       try {
//         const res=await axios({
//           method:'get',
//           url:"http://localhost:5000/getAllFiles",
//           json:true
//         });
//         console.log(res);
//         return(setFiles(res.data));
        
//       } catch (error) {
//         console.error(error);
//       }

//   }

//   , [])
//   console.log(files);


useEffect(async() => {

try {

  const res= await axios("http://localhost:5000/api/user/byemail",{ params:email})
  await setArr(res.data.mesElements)
  return(setData(res.data))
  
}

catch (error) {
  console.error(error);
}
  
}, [])

console.log('data',data);
console.log('file',state.titre);
console.log('id',data._id);

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };
  const handleUser = async() => { 

    try {
    
       await axios.post(`http://localhost:5000/api/addelt/${data._id}`,{titre:state.titre})
      
    }
    
    catch (error) {
      console.error(error);
    }
    }


  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const {titre, universite, specialite, description } = state;
      if (titre.trim() !== '' && universite.trim() !== '' && description.trim() !== '' && specialite.trim()!=='') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('titre', titre);
          formData.append('universite', universite);
          formData.append('specialite', specialite) ; 
          formData.append('description', description);
          formData.append('utilisateur', data._id);

          setErrorMsg('');
          await axios.post(`http://localhost:5000/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          await handleUser()
          await alert('votre fichier est ajout?? et en attante de validation')
          await window.location.reload()
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  const getFile=async(el) => { 
  try {
    const rsl=await axios.get("http://localhost:5000/getFile",{params:{titre:el}});
    console.log(rsl);
    await setfirst(rsl.data);
    await history.push({
      pathname:'/carditem',
      search:'?query=first',
      state:{first:rsl.data,el:data._id}
    
    })
  } catch (error) {
    console.error(error);
  }
 }
  
  console.log('first',first);


console.log('arr',arr);
  return (
    <React.Fragment>
    <Navbarprofile email={email} style={{ backgroundColor:"rgb(115, 210, 222)"}}/>
    <div className="taa-profile d-flex  align-items-center">
  
         <div className="rounded p-4 p-sm-3">
         <form  id="profile" >
         <table class="table">
         <thead>
           <tr>
             <th scope="col">
             <p className=" mb-3 fs-3 fw-normal">{data.genre=='f' ?  <img src={f} style={{width:'40px' ,margin:'20px'}}/> : <img src={h} style={{width:'150px' ,margin:'30px'}}/>}</p>
             </th>
             </tr>
             <tr>
             <th scope='col'>
                <h3 className="position-relative"> Vos donn??es</h3>
              </th>
              </tr><tr>
              <th scope="col">
             <p className="mb-3"><em>Nom:{data.nom}</em></p>
             </th> 
             </tr>
             <tr>  
             <th scope="col">    
             <p className="mb-3"><em>Prenom:{data.prenom}</em></p>
             </th> 
             </tr>
             <tr>   
             <th scope="col">   
             <p className="mb-3"><em>Email:{data.email}</em></p>
             
             </th>
             </tr>
             <tr>
             <th>
             
             <div className="vr" />        
 <Button type="button" className="btn btn-primary btn-sm"><Modif  id={data._id} nom={data.nom} prenom={data.prenom}/></Button>
          
             </th>
             </tr>
             </thead>
             </table>     
          </form>
         </div>   
<div className='col'> | </div>
 <div className='row'>
 <table class="table table-striped">
 <thead>
   <tr>
     <th scope="col">
 <h3 style={{color:"white"}}> Mes ??l??ments : </h3>
     </th>
     </tr>
     <tr>
     <th scope='col'>
 {arr.map((elt,key)=>
     <div key={key}>
     <button type="button" className="secondary" onClick={()=>getFile(elt)}> Titre du rapport :{elt}</button>
    
     </div>
     
    
    )}
    </th>
    </tr></thead></table>
    </div>
    <div className='col'>  |  </div>
  
      <Form className="rounded p-4 p-sm-3" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
        <Col>
          <Form.Group className="mb-3" controlId="titre">
            <Form.Control
              type="text"
              name="titre"
              value={state.titre || ''}
              placeholder="votre titre ..."
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="universite">
              <Form.Control
                type="text"
                name="universite"
                value={state.universite || ''}
                placeholder="votre universit?? ..."
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="form-group">
              <Form.Group className="mb-3" controlId="Specialite ">
                 <Form.Label>votre sp??cialit?? :</Form.Label>
                 <MDBCheckbox name='specialite' value='info' id='flexCheckDefault' label='Informatique ' onChange={handleInputChange} />
                 <MDBCheckbox name='specialite' value='ges' id='flexCheckChecked' label='Gestion'  onChange={handleInputChange} />
                 <MDBCheckbox name='specialite' value='eco' id='flexCheckChecked' label='Economie'  onChange={handleInputChange} />
              </Form.Group>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="description" className="mb-3">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Description du sujet ..."
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="upload-section">
          <Dropzone
            onDrop={onDrop}
            onDragEnter={() => updateBorder('over')}
            onDragLeave={() => updateBorder('leave')}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                <input {...getInputProps()} />
                <p>Faites glisser pour d??posez un fichier OU cliquez i??i pour s??lectionner un fichier </p>
                {file && (
                  <div>
                    <strong>Le fichier s??lectionn?? : </strong> {file.name}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
                <img className="preview-image" src={previewSrc} alt="Preview" />
              </div>
            ) : (
              <div className="preview-message">
                <p>pas d'aper??u pour ce type de fichier </p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <p> un aper??u du fichier s??l??ctionn?? sera affich?? </p>
            </div>
          )}
        </div>
        
        <Button variant="primary" type="submit" className='btn btn-success'>
          Envoyer une demande 
        </Button>
        
      </Form>
    </div>
     
    </React.Fragment>
  )
}

export default Upload ; 



// <h1> Mes ??l??ments</h1>
// <div>{arr.map((elt,key)=>
//    <div key={key}>
//    <ul>
//     <li>{elt.titre}</li>
//   </ul>
//   </div>)}
//   </div>

// import React, { useState, useRef } from 'react';
// import Dropzone from 'react-dropzone';
// import axios from 'axios';
// import { Form, Row, Col, Button } from 'react-bootstrap';
// import { MDBCheckbox } from 'mdb-react-ui-kit';
// const Upload = (props) => {

//     const [file, setFile] = useState(null); // state for storing actual image
//   const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
//   const [state, setState] = useState({
//     universite: '',
//     specialite: '',
//     description: '',
    
//   });
  
//   const [errorMsg, setErrorMsg] = useState('');
//   const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
//   const dropRef = useRef(); // React ref for managing the hover state of droppable area
//    const [ specialite, setSpecialite ]= useState('') ;
//   const handleInputChange = (event) => {
//     setState({
//       ...state,
//       [event.target.name]: event.target.value
//     });
//   };

//   const onDrop = (files) => {
//     const [uploadedFile] = files;
//     setFile(uploadedFile);

//     const fileReader = new FileReader();
//     fileReader.onload = () => {
//       setPreviewSrc(fileReader.result);
//     };
//     fileReader.readAsDataURL(uploadedFile);
//     setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
//     dropRef.current.style.border = '2px dashed #e9ebeb';
//   };

//   const updateBorder = (dragState) => {
//     if (dragState === 'over') {
//       dropRef.current.style.border = '2px solid #000';
//     } else if (dragState === 'leave') {
//       dropRef.current.style.border = '2px dashed #e9ebeb';
//     }
//   };

//   const handleOnSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { universite, specialite, description } = state;
//       if (universite.trim() !== '' && specialite.trim() !== '' && description.trim()!=='' ) {
//         if (file) {
//           const formData = new FormData();
//           formData.append('file', file);
//           formData.append('universite', universite);
//           formData.append('specialite', specialite) ; 
//           formData.append('description', description);
//           console.log("data",formData);
//           setErrorMsg('');
//           await axios.post(`http://localhost:5000/upload`, formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           });
//           props.history.push('/list');
//         } else {
//           setErrorMsg('Please select a file to add.');
//         }
//       } else {
//         setErrorMsg('Please enter all the field values.');
//       }
//     } catch (error) {
//       error.response && setErrorMsg(error.response.data);
//     }
//   };



//   return (
//     <React.Fragment>
//       <Form className="search-form" onSubmit={handleOnSubmit}>
//         {errorMsg && <p className="errorMsg">{errorMsg}</p>}
//         <Row>
//           <Col>
//             <Form.Group controlId="universite">
//               <Form.Control
//                 type="text"
//                 name="universite"
//                 value={state.universite || ''}
//                 placeholder="Entrer votre universit?? ..."
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//         <Col>
//         <div className="form-group">
//               <Form.Group className="mb-3" controlId="Specialite ">
//                  <Form.Label>votre sp??cialit?? :</Form.Label>
//                  <MDBCheckbox name='specialite' value='info' id='flexCheckDefault' label='Informatique ' onChange={handleInputChange} />
//                  <MDBCheckbox name='specialite' value='ges' id='flexCheckChecked' label='Gestion'  onChange={handleInputChange} />
//                  <MDBCheckbox name='specialite' value='eco' id='flexCheckChecked' label='Economie'  onChange={handleInputChange} />
//               </Form.Group>
//         </div>
//         </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Form.Group controlId="description">
//               <Form.Control
//                 type="text"
//                 name="description"
//                 value={state.description || ''}
//                 placeholder="Entrer une description"
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <div className="upload-section">
//           <Dropzone
//             onDrop={onDrop}
//             onDragEnter={() => updateBorder('over')}
//             onDragLeave={() => updateBorder('leave')}
//           >
//             {({ getRootProps, getInputProps }) => (
//               <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
//                 <input {...getInputProps()} />
//                 <p> Importer et glisser un fichier ou bien cliquez i??i pour s??lectionner un fichier </p>
//                 {file && (
//                   <div>
//                     <strong>Fichier s??lectionn??:</strong> {file.name}
//                   </div>
//                 )}
//               </div>
//             )}
//           </Dropzone>
//           {previewSrc ? (
//             isPreviewAvailable ? (
//               <div className="image-preview">
//                 <img className="preview-image" src={previewSrc} alt="Preview" />
//               </div>
//             ) : (
//               <div className="preview-message">
//                 <p>pas d'aper??u pour ce type de fichier </p>
//               </div>
//             )
//           ) : (
//             <div className="preview-message">
//               <p> Un aper??u sera afficher l?? apr??s la s??lection </p>
//             </div>
//           )}
//         </div>
//         <Button variant="primary" type="submit">
//           Envoyer
//         </Button>
//       </Form>
//     </React.Fragment>
//   )
// }

// export default Upload