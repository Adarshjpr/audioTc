
 const express =    require('express')
const connectDB = require('./config/db')
const dontenv = require('dotenv')



 const app = express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
 dontenv.config()
 connectDB()

const authUser = require('./Routes/UsersRoutes')
const protectedRoute = require('./middleware/authMiddleware')
 const upload = require('./middleware/uploadMiddleware')
const transcribeRoute = require('./Routes/TranscribeRouter')

app.use('/api' , transcribeRoute);
 
 app.get('/profile' , protectedRoute,(req , res)=>{
   
   res.send("hello world proteced ")
 })

 app.get('/dashboard',protectedRoute , (req , res)=>{

  res.status(200).json({
    message: " welcome to  dashBoard",
    email: req.user.email
  })
 })
app.use('/app' , authUser)







//  (image is the name of the field in the form-data / key in the form-data )
 app.post( '/upload' , upload.single('image') , (req, res )=>{

  console.log(req.file) // this will log the file information to the console
  res.status(200).json({
    message: " file uploaded successfully",
    file: req.file
  })  
 })



 
 app.listen(4000 , ()=>{
    console.log(" app  is  live ")
 })
