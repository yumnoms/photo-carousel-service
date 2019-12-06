//This is the Router file
const db = require('../database/index.js');
const controller = require('./controller');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.listen(port, () => {

  console.log('Server is running on: ', port);
  db.initialize();

});
app.use('/page', express.static(path.join(__dirname, '../client/dist')));

module.exports.app = app;
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