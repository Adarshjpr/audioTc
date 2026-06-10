
const busboy = require('busboy');
require('dotenv').config()

const transcribe = async (req, res) => {

    //  multer me data send karne ke liye form data  =>  multipart/form-data
    // bb =>  multipart/form-data  =>  file ko chote chote tukro me tod ke bhejta hai   =>  streaming + buffer

    try {

        console.log("header ", req.headers)

        const bb = busboy({
            headers: req.headers
        })
req.pipe(bb)

        // event   file  => fieldname  , file , info
        //  client file  enevt file  trigger 

        bb.on('file', async (fieldname, file, info) => {

            console.log("file received fieldname ", fieldname)
            console.log("file received  file ", file)
            console.log("file received  info ", info)

            // hey my name is adarsh 

            const chunks = []

            file.on('data', (chunk) => {
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

console.log("Deepgram Key:", process.env.DEEPGRAM_API_KEY);
            file.on('end',async () => {

                //  deepgram 

                const audioBuffer = Buffer.concat(chunks)


                const response = await fetch('https://api.deepgram.com/v1/listen?model=nova-3&smart_format=true', {
                    method: "POST",

                    headers: {
                        Authorization: `token ${process.env.DEEPGRAM_API_KEY}`,
                        "Content-Type": info.mimeType,

                    }
                    ,

                    body: audioBuffer,

                })


                const data = await response.json();

                console.log(data)

return res.status(200).json({
    success: true,
    transcript: data?.results?.channels[0]?.alternatives[0]?.transcript
 
});

            })




        })





    } catch (error) {

    }



}
module.exports = transcribe