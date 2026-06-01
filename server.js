
 const express =    require('express')
const connectDB = require('./config/db')
const dontenv = require('dotenv')
 const app = express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
 dontenv.config()
 connectDB()

const authUser = require('./Routes/UsersRoutes')

 app.get('/' ,(req , res)=>{
   
   res.send("hello world ")
 })

app.use('/app' , authUser)


 
 app.listen(4000 , ()=>{
    console.log(" app  is  live ")
 })
