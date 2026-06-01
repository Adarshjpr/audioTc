
const mongoDb = require("mongoose")

  const UserSchema  = mongoDb.Schema({

    name:String ,
    email:{
        type:String,
        unique: true
    } ,
    passwords:String

})

module.exports = mongoDb.model("user" , UserSchema)
