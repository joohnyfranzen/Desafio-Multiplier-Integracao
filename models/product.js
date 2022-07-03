const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Category = require('./category')

const Product = db.define('Product', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        required: true,
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
        required: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        required: true,
    },
})

Product.belongsTo(Category, {
    constraint: true,
    foreignKey: 'idCategoria'
})

module.exports = Product