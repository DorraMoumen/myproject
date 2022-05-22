
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

const Upload = (props) => {
  let imageURL ="";
  
  const email=props.location.state.email
  console.log(email);
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
const handleUser = async() => { 

  try {
  
     await axios.post(`http://localhost:5000/api/addelt/${data._id}`,{titre:state.titre})
    
  }
  
  catch (error) {
    console.error(error);
  }
  }

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
          // props.history.push('/list');
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
  const deleteFunc= (id) => {
    console.log(id);
        axios.delete(`http://localhost:5000/${id}`)
       }

console.log('arr',arr);
  return (
    <React.Fragment>
    <div id="all" >
    <Container id="main-container" className="d-grid h-100 ">
    <div>
    
    <p>{data.genre=='f' ?  <img src={f} style={{width:'40px' ,margin:'20px'}}/> : <img src={h} style={{width:'150px' ,margin:'30px'}}/>}</p>
 <h1>nom:{data.nom}</h1>
 <h1>prenom:{data.prenom}</h1>
 <h1>email:{data.email}</h1>
 <Button><Modif  id={data._id} nom={data.nom} prenom={data.prenom}/></Button>
 {arr.map((elt,key)=>
     <div key={key}>
    
<ul>
<li>{elt} </li> <button onClick={deleteFunc(elt._id)}>delete</button>
</ul>
   
    </div>)}
  
    </div>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
        <Col>
          <Form.Group controlId="titre">
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
            <Form.Group controlId="universite">
              <Form.Control
                type="text"
                name="universite"
                value={state.universite || ''}
                placeholder="votre université ..."
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="form-group">
              <Form.Group className="mb-3" controlId="Specialite ">
                 <Form.Label>votre spécialité :</Form.Label>
                 <MDBCheckbox name='specialite' value='info' id='flexCheckDefault' label='Informatique ' onChange={handleInputChange} />
                 <MDBCheckbox name='specialite' value='ges' id='flexCheckChecked' label='Gestion'  onChange={handleInputChange} />
                 <MDBCheckbox name='specialite' value='eco' id='flexCheckChecked' label='Economie'  onChange={handleInputChange} />
              </Form.Group>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="description">
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
                <p>Faites glisser pour déposez un fichier OU cliquez içi pour sélectionner un fichier </p>
                {file && (
                  <div>
                    <strong>Le fichier sélectionné : </strong> {file.name}
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
                <p>pas d'aperçu pour ce type de fichier </p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <p> un aperçu du fichier séléctionné sera affiché </p>
            </div>
          )}
        </div>
        
        <Button variant="primary" type="submit" >
          Envoyer
        </Button>
        
      </Form>
     </Container>
     </div>
    </React.Fragment>
  )
}

export default Upload



// <h1> Mes éléments</h1>
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
//                 placeholder="Entrer votre université ..."
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//         <Col>
//         <div className="form-group">
//               <Form.Group className="mb-3" controlId="Specialite ">
//                  <Form.Label>votre spécialité :</Form.Label>
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
//                 <p> Importer et glisser un fichier ou bien cliquez içi pour sélectionner un fichier </p>
//                 {file && (
//                   <div>
//                     <strong>Fichier sélectionné:</strong> {file.name}
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
//                 <p>pas d'aperçu pour ce type de fichier </p>
//               </div>
//             )
//           ) : (
//             <div className="preview-message">
//               <p> Un aperçu sera afficher là après la sélection </p>
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