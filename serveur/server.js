const express= require("express")
const connectdb=require("./BD/connectdb")
const users=require("./model/userModel")
const path = require('path');
const app=express()
const port=5000
const cors=require('cors')
const router = require("./routes/adminRoute")
connectdb()
app.use(cors())
app.use(express.json())
app.use('/api',router)

app.use(require('./routes/file'))

// /*************************************** GET ALL USERS *********************************************/

// app.get("/allusers",async(req,res)=>{
//     try {
//        const data=await users.find().exec()
//        res.status(200).send(data)
//    } catch (error) {
//        error? res.send('sth went wrong'):res.send('succeeded')
//    }
// })

// /******************************************** GET USER BY EMAIL ************************************/
// // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// //users.findOne({ 'Email': '' }, function (err, users) {
//   //if (err) return handleError(err);
//console.log('%s %s is a %s.', person.name.first, person.name.last,
//     //person.occupation);
// //});
      
  
app.listen(port,err=>err?console.log(err): console.log("server is running on port 5000"))


  

























































