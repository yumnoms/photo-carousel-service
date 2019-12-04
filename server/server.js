const db = require('../database/index.js');
const app = require('./router.js');
const port = 3000;

app.listen(port, () => {

  console.log('Server is running on: ', port);
  db.initialize();

});