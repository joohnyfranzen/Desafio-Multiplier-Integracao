const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/produtos", productController.index);
router.get("/produtos/:id", productController.show);
router.post("/produtos", productController.store);
router.patch("/produtos/:id", productController.update);
router.delete("produtos/:id", productController.delete);

module.exports = router;
