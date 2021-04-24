const express = require('express')
const mongoose = require('mongoose')
const bodyparser  = require('body-parser')
mongoose.connect('mongodb://localhost/crudop', {useNewUrlParser: true, useUnifiedTopology: true});

const productSchema = new mongoose.Schema({
    username: {type: String, required: true},
    price: {type: Number, required: true}
})

module.exports = mongoose.model('product',productSchema)

