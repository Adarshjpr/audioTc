
const mongoDB = require("mongoose")


const  connectDB = async ()=>{
   
    try {
          await  mongoDB.connect(process.env.mongoDB_URL);
          console.log("mongodb connect")
    } catch (error) {
        console.log(process.env.mongoDB_URL)
       console.log(error) 
        process.exit(1)
    }
}
module.exports = connectDB ;