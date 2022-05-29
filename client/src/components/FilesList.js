import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import Update from './Update';
import Header from './Header1';
import PrincipalHeader from './PrincipalHeader';

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const getFilesList = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/getAllFiles`);
      setErrorMsg('');
      setFilesList(data);
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };
  useEffect(() => {
  
    getFilesList();
  }, []);

  const deleteFunc= (id) => {
    axios.delete(`http://localhost:5000/${id}`)
 getFilesList()
    
   }
/*******************************VALIDER**************************************** */

// const validerFunc= (id) => {
//   axios.delete(`http://localhost:5000/${id}`)
//   getFilesList()
//  }



/****************************************************************************** */
  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`http://localhost:5000/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg(' erreur lors du téléchargement du fichier . Réessayez plus tard ');
      }
    }
  };

  return (
    <div className="files-container">
    <PrincipalHeader/>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table  className="table">
        <thead className="table-dark">
          <tr>
            <th>Titre</th>
            <th>Université</th>
            <th>Spécialité</th>
            <th>Description</th>
            <th>Télécharger Fichier</th>
            <th>Supprimer</th>
            <th>Mettre à jour</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, titre, universite,specialite, description,approved, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-titre">{titre}</td>
                  <td className="file-universite">{universite}</td>
                  <td className="file-specialite">{specialite}</td>
                  <td className="file-description">{description}</td>
              
                  <td>
                    <button type="button" class="btn btn-success" onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)}
                    >
                      Télécharger
                    </button>
                  </td>
                  <td>
                  <button type="button" className="btn btn-danger" style={{ width:"100px"}}  onClick={()=>deleteFunc(_id)}>supprimer</button>
                  </td>
                  <td>
                  <Update titre={titre} universite={universite} specialite={specialite} description={description} approved={approved} id={_id} getFilesList={getFilesList}></Update>
                  </td>
                  
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilesList;