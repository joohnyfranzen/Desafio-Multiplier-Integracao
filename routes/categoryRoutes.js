const express = require('express')
const router = express.Router()

const CategoryController = require('../controllers/categoryController')

router.post('/categorias', CategoryController.store)

module.exports = router