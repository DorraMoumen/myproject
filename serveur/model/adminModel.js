const mongoose=require('mongoose')
const {Schema ,model}=mongoose

const adminSchema=new Schema ({
    nom:{type:String, required:true},
    email:{type:String, required:true},
    motdepasse:{type:String, required:true}
    
})
 
const admins=model('admin',adminSchema)

module.exports=admins