const Category = require('../models/category')

module.exports = class CategoryController {

    static async store(req, res) {

        const {codigo, titulo, status} = req.body

        const category = {codigo, titulo, status}

        try { 
            createdCategory = await Category.create(category)
        } catch(err) {
            console.log(err)
        }
    }
}