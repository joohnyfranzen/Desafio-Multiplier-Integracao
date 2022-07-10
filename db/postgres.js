const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(  'postgres://postgres@localhost:5432/Meudatabase', {
    dialect: 'postgres',
    password: '123',
  }
);

module.exports = sequelize;
