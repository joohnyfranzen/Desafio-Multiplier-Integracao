const express = require("express");
const mysql = require("./db/mysql");
const postgres = require("./db/postgres");
const cron = require("node-cron");
const env = require("dotenv").config().parsed;

const app = express();

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Routes
app.use("/", categoryRoutes);
app.use("/", productRoutes);
app.use("/", inventoryRoutes);

cron.schedule(`* ${env.CRON_TIME} * * *`, () => {
  const config = require("./config");
  console.log("Running cron schedule, backup in move");
});
mysql.sync().then(() => {
  postgres.sync().then(() => {
    app.listen(env.APP_PORT);
  });
});
