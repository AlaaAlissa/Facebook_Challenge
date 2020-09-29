const mongoose = require('mongoose')

const db = 'mongodb+srv://alaa:amir1162019@cluster0.iz8ks.mongodb.net/test'

mongoose.connect(db , { useNewUrlParser: true, useUnifiedTopology: true})  
        .then( res => console.log('connected to db'))  
        .catch( err => console.log(err))