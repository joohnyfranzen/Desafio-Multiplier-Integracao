const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Category = db.define('Category', {
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

}) 

module.exports = Category