
const express = require('express')
const  routes = express()

 const transcribeController =    require('../controller/transcribeController')
const  secure = require('../middleware/authMiddleware')
const Tdata = require("../model/transcribe")

routes.post('/transcribe',secure, transcribeController)




routes.post('/my-transcribe' , secure , async (req,res)=>{

// logic 
 const records=   await Tdata.find({userId: req.user._id})
//   
//  sort  latest phele aaye 

res.status(200).json({
     sucess :true,
     count : records.length,
     data : records

})



})
module.exports = routes