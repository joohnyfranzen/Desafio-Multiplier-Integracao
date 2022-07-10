const env = require("dotenv").config().parsed;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `${env.MYSQL_SCHEMA}`,
  `${env.MYSQL_USER}`,
  `${env.MYSQL_PASS}`,
  {
    host: `${env.MYSQL_HOST}`,
    dialect: "mysql",
    port: `${env.MYSQL_PORT}`,
    logging: env.DEV_MODE == "true" ? true : false,
  }
);

try {
  sequelize.authenticate();
  console.log("Conectado ao Sequelize");
} catch (err) {
  console.log("Não foi  conectar:", error);
}

module.exports = sequelize;
