const db = require('../database/index.js');
const model = require('./model');

module.exports = {

  getImage: (id) =>{

    return Promise.resolve(model.getImage(id));

  }

};