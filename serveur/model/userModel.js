const mongoose=require("mongoose")
const {Schema,model}=mongoose

const userSchema=new Schema(
{ nom :{type :String , required :true} ,
 prenom :{type :String , required :true} ,
email :{type : String , required :true},
motdepasse :{type : String , required :true},
genre :{type : String , required :true},
isAdmin :{type: Boolean , default:false},
favoris :[String],
mesElements:[String],

})
const users=model("users",userSchema)
module.exports=users
