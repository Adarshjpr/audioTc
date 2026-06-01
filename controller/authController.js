

//  logic 

const user = require('../model/user')
const bcrypt = require('bcrypt')
const register = async(req , res)=>{

try {
      
// step 1:  user get  name email password
  const{name  , email ,  passwords } =    req.body;
console.log("bodayy  " ,req.body )

// step 2 :  email se cheack register 

          const existingUser=     await user.findOne({ "email":email})

          console.log(existingUser)
          if(existingUser){
            return res.status(400).Json({
                message : " found "
            })
          }

//  step 3:  password hash  bycript 
let hashPassword =  await  bcrypt.hash(passwords ,10)
//  strep 4 :  save data base me

const  users = await user.create({
    name , email ,  passwords: hashPassword
})
res.status(200).json({
message : " database me done"
})


} catch (error) {
    console.log(" error" , error )
}


}







  

module.exports = register;