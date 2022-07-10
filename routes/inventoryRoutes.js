const express = require("express");
const router = express.Router();

const InventoryController = require("../controllers/inventoryController");

router.get("/produtos/:id/estoque", InventoryController.show); // route of function show
router.patch("/produtos/:id/estoque", InventoryController.update); // route of function update
router.delete("/produtos/:id/estoque", InventoryController.delete); // route of function delete

module.exports = router;
