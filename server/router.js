//This is the Router file
const controller = require('./controller');
const express = require('express');
const path = require('path');
const app = express();

app.use('/page', express.static(path.join(__dirname, '../client/dist')));
app.get('/api/carousel/:id/', (req, res) => {

  controller.getImage(req.params).then((data) =>

    console.log('I got data from a promise', data[0].dataValues.imageUrl)

  );

  res.status(200).send(req.params);

});
app.get('/', (req, res) => {

  res.send(200);

});
module.exports = app;