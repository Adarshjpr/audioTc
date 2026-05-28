
const mongoDb = require("mongoose")

  const UserSchema  = mongoDb.Schema({

    name:String ,
    email:{
        type:String,
        unique: true
    } ,
    paswords:String

})

module.export = mongoDb.model("user" , UserSchema)
