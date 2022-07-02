const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post('/produtos', productController.store)

module.exports = router