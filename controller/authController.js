

//  logic 

const user = require('../model/user')
const bcrypt = require('bcrypt')
const register = async(req , res)=>{
const Jwt  = require('jsonwebtoken')
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


console.log(users._id)
const  userData= {
id:users._id,
email: users.email 
}

const jwt =  Jwt.sign(userData , process.env.jwt_SecretKey ,{expiresIn : '1h'})




res.status(200).json({
message : " database me done",
token: jwt
})


} catch (error) {
    console.log(" error" , error )
}


}





const login = async (req, res) =>{

  try {
      const{ email  , passwords} = req.body;

      console.log(passwords)
          const  existingUser =  await  user.findOne({email});

          console.log("ex " ,   existingUser)
          if(!existingUser){

           return  res.status(404).Json({
              message: "pls regiter first ",
            })
          }

// mypassword123  = lsjihfsnkjsbluibjdvldbgjdfvkjdasbv
console.log(existingUser.passwords)

    const  isMatch=   await bcrypt.compare(passwords , existingUser.passwords );

    if (!isMatch) {
        return  res.status(404).Json({
              message: " pls provide a correct passwords",
            })
    }

    const userData={
      id:user._id,
      email
    }

     const jwt =  Jwt.sign(userData, process.env.jwt_SecretKey,{expiresIn :"1h"})


res.status(200).json({
message : " database me done",
token: jwt
})

  } catch (error) {

    console.log(error)
  }

}



  

module.exports = {register  , login };