const { DataTypes } = require('sequelize')

const mysql = require('../db/mysql')
const postgres = require('../db/postgres')

const ProductMysql = require('./product').ProductMysql
const ProductPostgres = require('./product').ProductPostgres

const dbConfig = {
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
    }
}

const InventoryMysql = mysql.define('Inventory', dbConfig)
const InventoryPostgres = postgres.define('Inventory', dbConfig) 

InventoryMysql.belongsTo(ProductMysql, {
    constraint: true,
    foreignKey: 'idProduto'
})
InventoryPostgres.belongsTo(ProductPostgres, {
    constraint: true,
    foreignKey: 'idProduto'
})

module.exports = { InventoryMysql, InventoryPostgres }