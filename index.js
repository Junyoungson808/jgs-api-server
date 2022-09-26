'use strict';

let { start } = require('./src/server');
let { sequelizeDatabase } = require('./src/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful connection');
    start();
  })
  .catch(err => console.error(err));
