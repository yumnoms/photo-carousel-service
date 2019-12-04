const express = require ('express');
const db = require('../database/index.js');

module.exports = {

  getImage: (id) => db.Images.findAll({
    where: id
  })

};
