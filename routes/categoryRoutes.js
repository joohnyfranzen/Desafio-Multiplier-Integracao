const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/categoryController");

router.get("/categorias", CategoryController.index); // route of function index
router.get("/categorias/:id", CategoryController.show); // route of show
router.post("/categorias", CategoryController.store); // route of function store
router.patch("/categorias/:id", CategoryController.update); // route of function update
router.delete("/categorias/:id", CategoryController.delete); // route of function delete

module.exports = router;
