const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Inventory = db.define('Inventory', {
      
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },
    reserva: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },

}) 

module.exports = Inventory