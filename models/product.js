const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Product = db.define('Product', {
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },
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

module.exports = Product