const express = require('express') 
var app = express();
const bodyParser = require('body-parser')
const cors = require('cors') 
require('dotenv/config');
const mongoose = require('mongoose')
var imgModel = require('./Model/model');
const router = require('./routes/route')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true}).then( () => console.log("DB Connected"))
mongoose.connection.on('error', err => { console.log(`Connection Error: ${err}`)})

//middilewares
app.use(cors());
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(bodyParser.json({
    limit:'50mb',
    extended: true
}));
app.use('/', router)

app.listen(process.env.PORT, err => { 
    if (err) throw err 
    console.log(`Server running on: http://localhost:${process.env.PORT}`) 
})