const { DataTypes } = require("sequelize");

const mysql = require("../db/mysql");
const postgres = require("../db/postgres");

const { ProductMysql, ProductPostgres } = require("./product");

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
    type: DataTypes.SMALLINT(0, 1),
    defaultValue: 1,
    allowNull: false,
    required: true,
  },
};

const InventoryMysql = mysql.define("Inventory", dbConfig);
const InventoryPostgres = postgres.define("Inventory", dbConfig);

InventoryMysql.belongsTo(ProductMysql, {
  onDelete: "CASCADE",
  constraint: true,
  foreignKey: "idProduto",
});
InventoryPostgres.belongsTo(ProductPostgres, {
  onDelete: "CASCADE",
  constraint: true,
  foreignKey: "idProduto",
});

module.exports = { InventoryMysql, InventoryPostgres };
