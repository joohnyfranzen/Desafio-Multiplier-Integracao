const Category = require('../models/category')

module.exports = class CategoryController {

    static async store(req, res) {

        const {codigo, titulo, status} = req.body

        const category = {codigo, titulo, status}

        try { 
            const createdCategory = await Category.create(category)
        } catch(err) {
            console.log(err)
        }
    }

    static async show(req, res) {

        const id = req.params.id

        try {
            const show = await Category.findOne({ where: {id}})

            res.status(200).send(show)
            
        } catch(err) {
            console.log(err)
        }


    }
}