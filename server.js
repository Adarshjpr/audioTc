
 const express =    require('express')
const connectDB = require('./config/db')
const dontenv = require('dotenv')
 const app = express()


 dontenv.config()
 connectDB()





 
 app.listen(4000 , ()=>{
    console.log(" app  is  live ")
 })
