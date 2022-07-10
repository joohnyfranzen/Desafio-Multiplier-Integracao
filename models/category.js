const { DataTypes } = require('sequelize')

const mysql = require('../db/mysql')
const postgres = require('../db/postgres')

const dbConfig = {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        required: true,
    },
}

const CategoryMysql = mysql.define('Category', dbConfig)
const CategoryPostgres = postgres.define('Category', dbConfig) 

module.exports = { CategoryMysql, CategoryPostgres }