'use strict';

const express = require('express');
const { LIMIT_LIKE_PATTERN_LENGTH } = require('sqlite3');
const { customersInterface } = require('../models');

const router = express.Router();

router.get('/customers', async (req, res, next) => {
  let customers = await customersInterface.read();
  res.status(200).send(customers);
});

router.get('/customers', async (req, res, next) => {
  let { id } = req.params;
  let customers = await customersInterface.read(id);
  res.status(200).send(customers);
});

router.get('/customerWithOrders/:id', async (req, res, next) => {
  let { id } = req.params;

  let customerWithOrders = await customersInterface.readManyToOne(id, ordersInterface.model);

  //   if CRUD was not extracted this is what is SHOULD look Like. untested.
  //   let query = {
  //     where: {id},
  //     include: OrderModel,
  //   };
  //   let customerWithOrders = await CustomerModel.findOne(query);
  res.status(200).send(customerWithOrders);
});


module.exports = router;
