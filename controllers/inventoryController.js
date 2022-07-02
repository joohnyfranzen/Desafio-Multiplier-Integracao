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
}