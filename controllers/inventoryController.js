const Inventory = require('../models/inventory')

module.exports = class InventoryController {

    static async show(req, res) {

        const id = req.params.id

        try {
            const show = await Inventory.findOne({where: {id}})

            res.status(200).json(show)
        
        } catch(err) {
            console.log(err)
        }
    }

    static async update(req, res) {

        const id = req.params.id
        const update = req.body

        try {
            const updated = await Inventory.update(update, {where: {id}})

            res.status(200).json(updated)
        } catch(err) {
            console.log(err)
        }
    }

    static async delete(req, res) {

        try {
            res.status(501).json({message: `Não se pode deletar um estoque !`})
        } catch(err) {
            console.log(err)
        }
    } 
}