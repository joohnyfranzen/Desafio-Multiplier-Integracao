const Category = require('../models/category')

module.exports = class CategoryController {

    static async createCategory(req, res) {
        const {codigo, titulo, status} = req.body

        const category = [codigo, titulo, status]

        const createdCategory = await Category.create(category)
    }
}