var validator = require("email-validator");
 

/*******************************************REGISTER*******************************/
exports.register=(req,res,next)=>{
const {nom,prenom,genre,email,motdepasse}=req.body
if(!nom||!email||!motdepasse||!genre||!prenom){
    return(res.status(401).json({msg:'veuillez compléter vos données !'}))

}
 if (!validator.validate(email)){
    return(res.status(402).json({msg:'email non valide  !'}))
 }
 if (motdepasse.length<8){
    return(res.status(403).json({msg:'votre mot de passe doit contenir au moins 8 caractères'}))
 }

/****************************GENRE ************************************************/



// if(genre!=="f") {return(res.json({msg:'vous devez répondre par f ou m'}))}
 //else if (genre!=="m"){ 
  // return(res.json({msg:'vous devez répondre par f ou m'}))
 //}
 next()
}

 /******************************************LOGIN **********************************/
exports.login=(req,res,next)=>{
   const {email,motdepasse}=req.body
   if(!email||!motdepasse){
       return(res.status(401).json({msg:'veuillez compléter vos données !'}))
   
   }
    if (!validator.validate(email)){
       return(res.status(402).json({msg:'email non valide  !'}))
    }
    if (motdepasse.length<8){
       return(res.status(403).json({msg:'votre mot de passe doit contenir au moins 8 caractères'}))
    }
    next()
   }


/************************************ PROFIL*************************************/

//    exports.Profil=(req,res,next)=>{
//       const {université,description ,specialite}=req.body
//       if(!université){
//           return(res.status(401).json({msg:' veuillez entrer votre université '}))
      
//       }
//       if(!description){
//          return(res.status(402).json({msg:' veuillez entrer une description '}))
     
//      }
//      if(!specialite){
//       return(res.status(401).json({msg:' veuillez entrer votre spécialité '}))
  
//   }
//        next()
//       }