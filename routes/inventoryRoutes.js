const express = require('express')
const router = express.Router()

const InventoryController = require('../controllers/inventoryController')

router.get('/produtos:id/estoque', InventoryController.show)

module.exports = router