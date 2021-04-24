const express = require('express')
const router =  express.Router()
const authController = require('../controllers/controller')

router.get('/product',authController().product)
router.post('/product',authController().sendproduct)
router.patch('/product/:id',authController().update)
router.delete('/product/:id',authController().gone)

module.exports = router