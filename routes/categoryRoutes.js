const express = require('express')
const router = express.Router()

const CategoryController = require('../controllers/categoryController')

router.get('/categorias/:id', CategoryController.show)
router.post('/categorias', CategoryController.store)


module.exports = router