var express = require('express')
var app = express()

var porta = process.env.PORT  || 2222

app.use(express.urlencoded({extended:false}))

module.exports = {app,porta}