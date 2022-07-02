const Category = require('../models/category')

module.exports = class CategoryController {

    static async store(req, res) {

        const {codigo, titulo, status} = req.body

        const category = {codigo, titulo, status}

        try { 
            const createdCategory = await Category.create(category)

            res.status(200).json(createdCategory)

        } catch(err) {
            console.log(err)
        }
    }

    static async show(req, res) {

        const id = req.params.id

        try {
            const show = await Category.findOne({ where: {id}})

            res.status(200).json(show)

        } catch(err) {
            console.log(err)
        }
    }

    static async index(req, res) {
        
        try {
            const index = await Category.findAll()

            res.status(200).json(index)

        } catch(err) {
            console.log(err)
        }
    }

    static async update(req, res) {

        const update = req.body
        const id = req.params.id
        
        try {
            const updated = await Category.update(update, { where: {id}})

            res.status(200).json(update)

        } catch(err) {
            console.log(err)
        }
    }

    static async delete(req, res) {

        const id = req.params.id
        try {
            const deleted = await Category.destroy({where: {id}})

            res.status(200).json({message: `Categoria deletada`})
        } catch(err) {
        console.log(err)
        }
    }
}