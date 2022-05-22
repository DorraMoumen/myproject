const mongoose=require("mongoose") 
require("dotenv").config
const connectdb=()=>{
   
    mongoose.connect(process.env.mongouri)
    
    .then(()=>console.log ("connected to data base"))
   .catch(err=>console.log(err)) 
    
}
module.exports=connectdb ;
//Module.exports=connectdb ;
// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const etudiant = mongoose.model('etudiant', schema);
