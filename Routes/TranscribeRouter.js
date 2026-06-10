
const express = require('express')
const  routes = express()

 const transcribeController =    require('../controller/transcribeController')


routes.post('/transcribe', transcribeController)

module.exports = routes