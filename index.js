const express = require('express');
const conn = require('./db/conn');

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json());

conn.sync().then(() => {
    app.listen(3000)
})

