const Product = require('../models/product')

module.exports = class ProductController {

    static async store(req, res) {

            const {idCategoria, codigo, nome, decricao, valor, status} = req.body
    
            const product = {idCategoria, codigo, nome, decricao, valor, status}

            try {
                const createdProduct = await Product.create(product)

                res.status(202).json(createdProduct)
            } catch(err) {
                console.log(err)
            }
        }
        
}