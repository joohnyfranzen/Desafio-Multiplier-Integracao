const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/produtos', productController.index)
router.get('/produtos/:id', productController.show)
router.post('/produtos', productController.store)
router.patch('/produtos', productController.update)

module.exports = router