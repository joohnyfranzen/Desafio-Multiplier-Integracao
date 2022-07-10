const mysql = require("./db/mysql");
const postgres = require("./db/postgres");
const { CategoryMysql, CategoryPostgres } = require("./models/category");
const { InventoryMysql, InventoryPostgres } = require("./models/inventory");
const { ProductMysql, ProductPostgres } = require("./models/product");

mysql.sync().then(() => {
  postgres.sync({ force: true }).then(() => { // force to recriate all tables on postgres
    async function transferDataCategory() {
      try {
        const categories = await CategoryMysql.findAll(); // function to find all tables

        // sql inicial sequence of update to postgres
        var sql = `INSERT INTO public."Categories" ("codigo", "titulo", "status", "createdAt", "updatedAt") VALUES `;

        categories.map((categoria) => { // mapping each mysql data and add to postgres tables
          sql += `(${categoria.codigo}, '${categoria.titulo}', ${
            categoria.status
          }, '${categoria.createdAt
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}', '${new Date() // replace update time log
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}'),`;
        });
        sql = sql.slice(0, -1); // deleting last ,
        sql += ";"; // add last ;
        if (categories[0])
          postgres.query(sql, function (err, result) {
            if (err) console.log(err);
            console.log(result);
            console.log("Categorias atualizadas no postgres");
          });

        transferDataProduct();
      } catch (err) {
        console.log(err);
      }
    }

    async function transferDataProduct() {
      try {
        const products = await ProductMysql.findAll();

        var sql = `INSERT INTO public."Products" ("codigo", "nome", "descricao", "valor", "status", "createdAt", "updatedAt", "idCategoria") VALUES `;

        products.map((product) => {
          sql += `(${product.codigo}, '${product.nome}', '${
            product.descricao
          }', '${product.valor}', ${product.status}, '${product.createdAt
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}', '${new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}', ${product.idCategoria}),`;
        });
        sql = sql.slice(0, -1);
        sql += ";";
        if (products[0])
          postgres.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Produtos atualizados no postgres");
          });
        transferDataInventory();
      } catch (err) {
        console.log(err);
      }
    }

    async function transferDataInventory() {
      try {
        const inventories = await InventoryMysql.findAll();

        var sql = `INSERT INTO public."Inventories" ("quantidade", "reserva", "status", "createdAt", "updatedAt", "idProduto") VALUES `;

        inventories.map((inventory) => {
          sql += `(${inventory.quantidade}, '${inventory.reserva}', ${
            inventory.status
          }, '${inventory.createdAt
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}', '${new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}', ${inventory.idProduto}),`;
        });
        sql = sql.slice(0, -1);
        sql += ";";
        if (inventories[0])
          postgres.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Inventário atualizados no postgres");
          });
      } catch (err) {
        console.log(err);
      }
    }
    transferDataCategory();
  });
});
