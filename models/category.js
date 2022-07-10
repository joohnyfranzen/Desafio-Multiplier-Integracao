const { DataTypes } = require("sequelize");

const mysql = require("../db/mysql");
const postgres = require("../db/postgres");

const dbConfig = {
  codigo: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  titulo: {
    type: DataTypes.STRING(50),
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

const CategoryMysql = mysql.define("Category", dbConfig);
const CategoryPostgres = postgres.define("Category", dbConfig);

module.exports = { CategoryMysql, CategoryPostgres };
