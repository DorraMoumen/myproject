const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../model/fileModel');
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 16000000 // LA TAILLE MAXIMALE EST FIXEE SUR 16  POUR NE PAS PASSER VERS GRIDFS 
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls|pptx)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls or pptx format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});


/***********************************************UPLOAD*******************************************/
Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { titre,universite,specialite, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        titre,
        universite,
        specialite,
        description,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) { 
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);


/***************************************************GET ALL FILES**************************************/
Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});
/*********************************************GET ID ***************************************************/


// Router.get('/grap/:id', function(req, res) {
//   res.send('id: ' + req.params.id);
//   err?res.send('erreur dans la fonction !!'):res.send('yes !')
// });
/******************************************** wahda okhra njarab feha********************************** */

// //declare ObjectId from mongodb module
// const ObjectId = require('mongodb').ObjectId; 

// //transform your param into an ObjectId
// var id = req.params.id;       
// var good_id = new ObjectId(id);

// //you can now query
// Model.find({_id: good_id})


/************************************************DELETE FILE BY ID *************************************/
Router.delete('/:id',(req,res)=>{
  File.findByIdAndRemove(req.params.id,err=>
    err?res.send('delete file failed'):res.send('deletion succeeded'))

})

/*************************************************UPDATE TITLE AND DESCRIPTION **************************/

Router.put('/update/:id',(req,res)=>{
  // const { title, description } = req.body;
  File.findByIdAndUpdate(req.params.id,req.body,err=>
      err?res.send('update failed'):res.send('update succeeded'))
})


/***************************************************DOWNLOAD FILE*****************************************/

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});
/*****************************Get file by title ***********************************************/
Router.get('/getFile', async (req, res) => {
  try {
    const {titre}=req.query
    const files = await File.findOne({titre}).exec()
    
    return(res.json(files));
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});
module.exports = Router;