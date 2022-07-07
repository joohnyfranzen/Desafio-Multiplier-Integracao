const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(  'postgres://postgres@localhost:5433/multiplier', {
    dialect: 'postgres',
    password: '123',
    logging: false,
  }
);

module.exports = sequelize;
