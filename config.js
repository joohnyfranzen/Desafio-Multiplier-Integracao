const ProducMysql = require('./models/product').ProductMysql
const ProductPostgres = require('./models/product').ProductPostgres
const InventoryMysql = require('./models/inventory').InventoryMysql
const InventoryPostgres = require('./models/inventory').InventoryPostgres
const CategoryMysql = require('./models/category').CategoryMysql
const CategoryPostgres = require('./models/category').CategoryPostgres
const mysql = require('./db/mysql')
const postgres = require('./db/postgres')


mysql.sync().then(() => {
postgres.sync().then(() => {   
                           
async function transferDataCategory() {
    try {
        const categories = await CategoryMysql.findAll()
        
        var sql = `INSERT INTO public."Categories" ("codigo", "titulo", "status", "createdAt", "updatedAt") VALUES `

        Category = categories.map((categoria) => {
            sql += `(${categoria.codigo}, '${categoria.titulo}', ${categoria.status}, '${categoria.createdAt.toISOString().slice(0, 19).replace('T', ' ')}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}'),`
        })
        sql = sql.slice(0, -1);
        sql += ';';
        postgres.query(sql, function (err, result) {
            if (err) throw err
        })
        console.log('Produtos  atualizados no postgres')
    } catch(err) {
        console.log(err)
    }
    }
transferDataCategory();

   

})
})

