const express = require('express')
const app = express()
const router = require('./routes/router')
const port = 80
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crudop', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Database connected...');
}).catch(err=>{
    console.log('Connection failed...')
})


app.use(express.json());
app.use('/', router)



//Server
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})