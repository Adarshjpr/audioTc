

const express = require('express')
const  routes = express()


   const register  = require('../controller/authController')

   routes.post("/register", register)

   module.exports  = routes