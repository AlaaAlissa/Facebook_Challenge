const express = require('express')
const app = express()
const router = require('./config/router')
app.set(express.static('public'))

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))

app.use(express.static('public'))
// requier mongoose
require('./config/mongoose')
// requier router
app.use(router)

app.listen(9000)


