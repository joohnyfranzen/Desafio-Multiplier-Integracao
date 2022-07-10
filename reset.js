const mysql = require("./db/mysql");
const postgres = require("./db/postgres");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

mysql.sync({force: true}).then(() => { // connect to databases
  postgres.sync({force: true}).then(() => {
  });
});
