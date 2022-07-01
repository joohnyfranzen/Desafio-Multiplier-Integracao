const { Datatypes } = require('sequelize')

const db = require('../db/conn')

const Category = db.define('Category', {
    codigo: {
        type: Datatypes.STRING,
        allowNull: false,
        required: true,
    },
    titulo: {
        type: Datatypes.STRING,
        allowNull: false,
        required: true,
    },
    status: {
        type: Datatypes.BOOLEAN,
        allowNull: false,
        required: true,
    },

}) 

module.exports = Category