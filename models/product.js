const { DataTypes } = require('sequelize')

const db = rquire('../db/conn')

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
})