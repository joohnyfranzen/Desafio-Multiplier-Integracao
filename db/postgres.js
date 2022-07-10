const env = require('dotenv').config().parsed;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(  `postgres://${env.POSTGRES_USER}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_SCHEMA}`, {
    dialect: 'postgres',
    password: env.POSTGRES_PASS,
  }
);

module.exports = sequelize;
