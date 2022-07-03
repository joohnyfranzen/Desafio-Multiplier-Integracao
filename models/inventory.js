const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Product = require('./product')

const Inventory = db.define('Inventory', {
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
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        required: true,
    },
}) 

Inventory.belongsTo(Product, {
    constraint: true,
    foreignKey: 'idProduto'
})

module.exports = Inventory