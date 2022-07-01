const { Datatypes } = require('sequelize')

const db = require('../db/conn')

const Category = db.define('Category', {
    titulo: {
        type: Datatypes.STRING,
        allowNull: false,
        required: true,
    },    
}) 

module.exports = Category