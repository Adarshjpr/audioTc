

//  logic 

const User = require('../model/user')
const register = async(req , res)=>{

try {
      
// step 1:  user get  name email password
  const{name  , email , body } =    req.body;


// step 2 :  email se cheack register 

          const existingUser=     await User.findOne({email})

          if(existingUser){
            return res.status(400).Json({
                message : " found "
            })
          }

//  step 3:  password hash  bycript 
// const hashPassword = ??
//  strep 4 :  save data base me

const  user = await User.create({
    name , email , password
})



} catch (error) {
    console.log(" error" , error )
}


}