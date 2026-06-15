const mongoDb = require("mongoose")

const transcribeModule = mongoDb.Schema({
//  reference 

userId:{
type: mongoDb.Schema.Types.ObjectId,
ref: "user" ,
required:true
},

transcribe : {
    type : String,
    required : true
},
 fileName : {
    type: String
 },
 createAt :    {
type:Date,
default: Date.now

 } 
})

module.exports = mongoDb.model("transcribe" , transcribeModule)
