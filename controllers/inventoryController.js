const Inventory = require('../models/inventory')

module.exports = class InventoryController {

    static async store(req, res) {

        const {idProduto, quantidade, reserva, status} = req.body
        
        const createInventory = {idProduto, quantidade, reserva, status}
    
        try {
            const createdInventory = await Inventory.create(createInventory)

            res.status(202).json(createdInventory)
        } catch(err) {
            console.log(err)
        }
    }
}