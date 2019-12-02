const db = require('../database/index.js')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const seed = require('../database/seed.js')

// app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.get('/data', (req, res) => res.send(seed.seed))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))