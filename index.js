const express = require("express");
const mysql = require("./db/mysql");
const postgres = require("./db/postgres");
const cron = require("node-cron");
const env = require("dotenv").config().parsed;
const cors = require('cors')

const app = express(); // iniciate aplication

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // using format json

app.use(cors({ origin: env.ORIGIN_HOST }));

app.use("/", categoryRoutes); 
app.use("/", productRoutes);
app.use("/", inventoryRoutes);

cron.schedule('* 2 * * *', () => { // add a time backup
  const config = require("./config");
  console.log("Running cron schedule, backup in move");
},
{
  scheduled: true,
  timezone: "America/Sao_Paulo",
});
mysql.sync().then(() => { // connect to databases
  postgres.sync().then(() => {
    app.listen(env.APP_PORT);
  });
});
