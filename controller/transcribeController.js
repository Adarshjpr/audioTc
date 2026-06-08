
const busboy = require('busboy');
const  busboy = require('busboy');

const  transcribe = async (req, res) =>{

    //  multer me data send karne ke liye form data  =>  multipart/form-data
// busboy =>  multipart/form-data  =>  file ko chote chote tukro me tod ke bhejta hai   =>  streaming + buffer

try {
    
console.log("header " , req.headers)

const busboy  = busboy({
    headers: req.headers
})


// event   file  => fieldname  , file , info
//  client file  enevt file  trigger 

busboy.on('file' , async(fieldname  , file , info )=>{

    console.log("file received fieldname " , fieldname )
    console.log("file received  file " , file )
    console.log("file received  info " , info )

    // hey my name is adarsh 

    const  chunks = []

    file.on ('data' , (chunk)=>{
        chunks.push(chunk)
    })

    /*
hey 
my 
name 
is  
adarsh 
    */



//  abb mere ko  bhej dena h  kah pe deepgram pe 


file.on('end' , ()=>{

//  deepgram 

const audioBuffer = Buffer.concat(chunks)

 
  const response  = await   fetch('https://api.deepgram.com/v1/listen?model=nova-3&smart_format=true', {
    method: "POST" ,

    headers :{
        Authorization : `token ${process.dotenv.DEEPGRAM_API_KEY}`,
        "Content-Type" : info.mimeType, 

    }
    ,

body :audioBuffer  , 

 })


 const  data = response.json();

 console.log(data)


})




})





} catch (error) {
    
}



}
module.exports = transcribe