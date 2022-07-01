const express = require('express');
const conn = require('./db/conn');

const app = express()

const categoryRoutes = require('./routes/categoryRoutes')

app.use(express.urlencoded({ extended: true }))

app.use(express.json());

// Routes
app.use('/', categoryRoutes)

conn.sync().then(() => {
    app.listen(3000)
})

