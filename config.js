const mysql = require('./db/mysql')
const postgres = require('./db/postgres')
const { CategoryMysql, CategoryPostgres } = require('./models/category')
const { InventoryMysql, InventoryPostgres } = require('./models/inventory')
const { ProductMysql, ProductPostgres } = require('./models/product')

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
        console.log('Categorias atualizadas no postgres')
    } catch(err) {
        console.log(err)
    }
    }
transferDataCategory();

async function transferDataProduct() {
    try {
        const products = await ProductMysql.findAll()
        
        var sql = `INSERT INTO public."Product" ("codigo", "nome", "descriçao", "valor", "status", "createdAt", "updatedAt") VALUES `

        Product = products.map((product) => {
            sql += `(${product.codigo}, '${product.nome}', '${product.descricao}', '${product.valor}', ${product.status}, '${product.createdAt.toISOString().slice(0, 19).replace('T', ' ')}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}'),`
        })
        sql = sql.slice(0, -1);
        sql += ';';
        postgres.query(sql, function (err, result) {
            if (err) throw err
        })
        console.log('Produtos atualizados no postgres')
    } catch(err) {
        console.log(err)
    }
    }
transferDataProduct();
   
async function transferDataInventory() {
    try {
        const inventories = await InventoryMysql.findAll()
        
        var sql = `INSERT INTO public."Inventory" ("quantidade", "reserva", "status", "createdAt", "updatedAt") VALUES `

        Inventory = inventories.map((inventory) => {
            sql += `(${inventory.quantidade}, '${inventory.reserva}', ${inventory.status}, '${inventory.createdAt.toISOString().slice(0, 19).replace('T', ' ')}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}'),`
        })
        sql = sql.slice(0, -1);
        sql += ';';
        postgres.query(sql, function (err, result) {
            if (err) throw err
        })
        console.log('Inventário atualizados no postgres')
    } catch(err) {
        console.log(err)
    }
    }
transferDataInventory();

})
})

