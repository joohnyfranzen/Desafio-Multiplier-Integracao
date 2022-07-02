const Product = require('../models/product')

module.exports = class ProductController {

    static async store(req, res) {

        const {idCategoria, codigo, nome, descricao, valor, status} = req.body
    
        const product = {idCategoria, codigo, nome, descricao, valor, status}

        try {
            const createdProduct = await Product.create(product)

            res.status(202).json(createdProduct)
        } catch(err) {
            console.log(err)
        }
    }

    static async show(req, res) {

        const id = req.params.id

        try {
            const show = await Product.findOne({where: {id}})

            res.status(202).json(show)
        } catch(err) {
            console.log(err)
        }
    }
    
    static async index(req, res) {

        try {
            const index = await Product.findAll()
            
            res.status(202).json(index)
        } catch(err) {
            console.log(err)
        }
    }

    static async update(req, res) {

        const update = req.body
        const id = req.params.id

        try {
            const updatedProduct = await Product.update(update, {where: {id}}) 

            res.status(202).json(update)
        } catch(err) {
            console.log(err)
        }
    }
    
    static async delete(req, res) {

        const id = req.params.id

        try {
            const deleted = await Product.destroy({where: {id}})

            res.status(202).json({message: `Produto deletado`})
        } catch(err) {
            console.log(err)
        }
    }
}