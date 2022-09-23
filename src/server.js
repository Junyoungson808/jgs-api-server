'use strict';

require('dotenv').config();
const app = express();
const express = require('express');
const logger = require('./middleware/logger');

const peopleRouter = require('./routes/people');
const foodRouter = require('./routes/food');
const catRouter = require('./routes/cats');

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);

app.use(peopleRouter);
app.use(foodRouter);


function start() {
  app.listen(PORT, () => console.log('listening on port'));
}

module.exports = { app, start };
