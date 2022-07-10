const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('multiplier', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

try {
    sequelize.authenticate()
    console.log('Conectado ao Sequelize')
} 
catch(err) {
    console.log('Não foi  conectar:', error)
}

module.exports = sequelize