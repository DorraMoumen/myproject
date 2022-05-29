const express=require('express')
const { register , login } = require('../middlewares/auth')
const  router =express.Router()
const users=require('../model/userModel')
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken')
require('dotenv').config()


//********************************REGISTER*************************************************/
router.post('/user/register',register,async(req,res)=>{
   const {nom,prenom,email,motdepasse,genre}=req.body
   const searchAdmin= await users.findOne({email}).exec()
   if (searchAdmin){
       return (res.status(401).json({msg:'cet utilisateur est inscrit déjà  !'}))
   }
   if (email==="dmoumen011@gmail.com"){
    const hashedPassword= await bcrypt.hash( motdepasse,10)
    return users.create({nom,prenom,email,motdepasse:hashedPassword,genre,isAdmin:true},(err)=>{
     return (err?(res.status(501).json({msg:'failed to add user'}))
     :
     (res.status(200).json({msg:'admin added to database'})))
 
 })
   }
   else {
    const hashedPassword= await bcrypt.hash( motdepasse,10)
    return users.create({nom,prenom,email,motdepasse:hashedPassword,genre},(err)=>{
     return (err?(res.status(501).json({msg:'failed to add user'}))
     :
     (res.status(200).json({msg:'admin added to database'})))
 
 })
   }

})

/**************************************************LOGIN******************************************/

router.post('/user/login',login,async(req,res)=>{
const {email,motdepasse}=req.body
const searchUser=await users.findOne({email}).exec()
if (!searchUser){
    return (res.status(402).json({msg:'cet administrateur nexiste pas !'}))}
    const checkPassword= await bcrypt.compare(motdepasse,searchUser.motdepasse)
 if (!checkPassword){
    return(res.status(403).json({msg:'veuillez vérifier votre mot de passe !'}))

 }
 else{
var token = jwt.sign({email},process.env.tokenkey)
 //res.send(token)
 return(res.json({msg:'login succeeded !', token:token, userId:searchUser._id  , isAdmin:searchUser.isAdmin }))

}})

/************************************ AUTHENTIFICATION*******************************************/
router.get('/user/auth',async(req,res)=>{
try {
    const token=req.headers.authorization
    const tokenVerify=await jwt.verify(token,'u8x/A?D(Zr4u7x!AhWmZq4t7QeThVmYq+KbPeShV')
    if(tokenVerify){
        return(res.status(200).json({msg:'vous etes authorisé',isAuth:true}))
    }
    else{
        return(res.status(505).json({msg:'vous n etes pas authorisé !',isAuth:false}))
    }
  
} catch (error) {
    res.send(error.message);
}
    
})
/************************************PROFILE*******************************************************/
router.get("/user/byemail",async(req,res)=>{
    try {
    const {email}=req.query
    const data=await users.findOne({email}).exec()
    return(res.json(data))
    } catch (error) {
        
    return(res.json(error.message))
    }
    
 })
/********************************* FONCTION DE TEST *************************************************/
router.post('/addelt/:id',async(req,res)=>{
    try {
        
    const {titre}=req.body
    const result=await users.findById(req.params.id).exec()
    await result.mesElements.push(titre)
    await result.save()
    return(res.json(result))
    } catch (error) {
       console.log(error); 
    }
})
router.put('/updateelt/:id',(req,res)=>{
    const {oldName,newName}=req.body
users.updateOne({_id:req.params.id,mesElements:oldName},
    { $set: { "mesElements.$" : newName } },(err)=>{err?res.send(err):res.send("update succeeded")})
})
/*******************************************Delete ********************************** */
router.delete('/deleteelt/:id',(req,res)=>{
    const {titre}=req.query
users.updateOne({_id:req.params.id},
    { $pull: { "mesElements" : titre } },(err)=>{err?res.send(err):res.send("delete succeeded")})
})
/* TemplateDoc.findOneAndUpdate(
    { userId: _id },
    { $pull: { templates: { _id: templateid } } },
    { new: true }
  )
    .then(templates => console.log(templates))
    .catch(err => console.log(err));*/


/************************************ GET ALL USERS ************************************************/


router.get("/allusers",async(req,res)=>{
    try {
       const data=await users.find().exec()
       res.status(200).send(data)
   } catch (error) {
       error? res.send('sth went wrong'):res.send('succeeded')
   }
})
/**********************************modifier données ******************/

router.put('/updateProfil/:id',(req,res)=>{
    
    users.findByIdAndUpdate(req.params.id,req.body,err=>
        err?res.send('update failed'):res.send('update succeeded'))
  })


module.exports=router  
