const express = require('express')
const router = express.Router()

const CategoryController = require('../controllers/categoryController')

router.get('/categorias', CategoryController.index)
router.get('/categorias/:id', CategoryController.show)
router.post('/categorias', CategoryController.store)
router.patch('/categorias/:id', CategoryController.update)


module.exports = router