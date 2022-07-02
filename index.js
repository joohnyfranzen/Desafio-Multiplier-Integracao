const express = require('express');
const conn = require('./db/conn');

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

conn.sync().then(() => {
    app.listen(3000)
})

