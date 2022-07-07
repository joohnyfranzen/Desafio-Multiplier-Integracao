const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

const database = new Sequelize(  "postgres://postgres@localhost:5433/Desafio_RestAPI_NodeJS", 
  {
    dialect: "postgres",
    password: "123",
    logging: false,
  }
);

module.exports = sequelize;
