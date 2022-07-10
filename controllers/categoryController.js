const Category = require("../models/category").CategoryMysql;

module.exports = class CategoryController {
  static async store(req, res) { // Function to create a category in the table
    const { codigo, titulo, status } = req.body;

    const category = { codigo, titulo, status };

    try {
      const createdCategory = await Category.create(category);

      res.status(201).json(createdCategory);
    } catch (err) {
      console.log(err);
    }
  }

  static async show(req, res) { // Function to show one category of the table
    const id = req.params.id;

    try {
      const show = await Category.findOne({ where: { id } });

      res.status(202).json(show);
    } catch (err) {
      console.log(err);
    }
  }

  static async index(req, res) { // Function to show all categorys of the table
    try {
      const index = await Category.findAll();

      res.status(202).json(index);
    } catch (err) {
      console.log(err);
    }
  }

  static async update(req, res) { // Function to update one category of the table
    const update = req.body;
    const id = req.params.id;

    try {
      const updated = await Category.update(update, { where: { id } });

      res.status(206).json(update);
    } catch (err) {
      console.log(err);
    }
  }

  static async delete(req, res) { // Function to delete one category of the table
    const id = req.params.id;
    try {
      const deleted = await Category.destroy({ where: { id } });

      res.status(202).json({ message: `Categoria deletada` });
    } catch (err) {
      console.log(err);
    }
  }
};
