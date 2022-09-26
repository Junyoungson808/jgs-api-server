'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middleware/logger');

const customersRouter = require('./routes/customers');
const catsRouter = require('./routes/cats');

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);

app.use(customersRouter);
app.use(catsRouter);


function start() {
  app.listen(PORT, () => console.log('listening on port'));
}

module.exports = { app, start };
