const ProducMysql = require('./models/product').ProductMysql
const ProductPostgres = require('./models/product').ProductPostgres
const InventoryMysql = require('./models/inventory').InventoryMysql
const InventoryPostgres = require('./models/inventory').InventoryPostgres
const CategoryMysql = require('./models/category').CategoryMysql
const CategoryPostgres = require('./models/category').CategoryPostgres

const mysql = require('./db/mysql')
const postgres = require('./db/postgres')

async function transferData(table, models) {
    const Data = await mysql.query(`SELECT * from multiplier`)
    console.log(`Data`)
    
}

console.log('Aplicação em andamento')