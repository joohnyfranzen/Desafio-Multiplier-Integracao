const express = require('express');
const mysql = require('./db/mysql');
const postgres = require('./db/postgres')
const cron = require('node-cron')

const app = express()

const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const inventoryRoutes = require('./routes/inventoryRoutes')

app.use(express.urlencoded({ extended: true }))

app.use(express.json());

// Routes
app.use('/', categoryRoutes)
app.use('/', productRoutes)
app.use('/', inventoryRoutes)

cron.schedule ('* * * * *', () => {
    const config = require('./config')
})
mysql.sync().then(() => {
    app.listen(3000)
    postgres.sync({force: true}).then(() => {
        
    })
})

