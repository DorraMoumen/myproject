const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
  {

    titre: {
      type: String,
      required: true,
      trim: true
    },
    universite: {
      type: String,
      required: true,
      trim: true
    },
    specialite: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    // userid:{
    //   type:String,
      
    // },
    approved:{
      type:Boolean,
      default:false,
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    } , 

  //   userid: {
  //     type: String,
  //     required: true,
  //     trim: true
  //  },
  //   Approved: {
  //     type: Boolean,
  //     required: true,
  //     trim: true ,
  //     default:false,
  //   },
  },
  {
    timestamps: true
  }
);

const File = mongoose.model('File', fileSchema);

module.exports = File;
