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
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

module.exports.app = app;
app.get('/api/carousel/:businessId/', (req, res) => {
  console.log("get request with params", req.params);
  controller.getImage(req.params).then((data) =>{

    let values = [];
    for (var i = 0; i < data.length; i++) {
      values.push({id: data[i].dataValues.id, imageUrl: data[i].dataValues.imageUrl, });
    }
    console.log('I got data from a promise',values);
    res.status(200).send(values);
  }


  );



});
app.get('/', (req, res) => {

  res.send(200);


});
module.exports = app;