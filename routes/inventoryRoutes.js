const express = require("express");
const router = express.Router();

const InventoryController = require("../controllers/inventoryController");

router.get("/produtos/:id/estoque", InventoryController.show);
router.patch("/produtos/:id/estoque", InventoryController.update);
router.delete("/produtos/:id/estoque", InventoryController.delete);

module.exports = router;
