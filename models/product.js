const { DataTypes } = require('sequelize')

const mysql = require('../db/mysql')
const postgres = require('../db/postgres')
const { CategoryMysql, CategoryPostgres } = require('./category')

const dbConfig = {
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
}

const ProductMysql = mysql.define('Product', dbConfig)
const ProductPostgres = postgres.define('Product', dbConfig)

ProductMysql.belongsTo(CategoryMysql, {
    constraint: true,
    foreignKey: 'idCategoria'
})
ProductPostgres.belongsTo(CategoryPostgres, {
    constraint: true,
    foreignKey: 'idCategoria'
})

module.exports = { ProductMysql, ProductPostgres }