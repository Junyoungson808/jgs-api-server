'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const candyRouter = require('./routes/candy');
const carsRouter = require('./routes/cars');

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);
app.use(candyRouter);
app.use(carsRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/person', validator);

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use('*', notFound);

app.use(errorHandler);



function start() {
  app.listen(PORT, () => console.log('listening on port'));
}

module.exports = { app, start };
