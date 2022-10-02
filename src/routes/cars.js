'use strict';

const express = require('express');
const router = express.Router();
const { carsInterface } =  require('../models');

router.get('/cars', async (req,res) => {
  const cars = await carsInterface.read(); 
  res.status(200).json(cars);
});

router.get('/cars/:id', async (req,res) => {
  let { id } = req.params;
  const cars = await carsInterface.read(id); 
  res.status(200).json(cars);
});

router.post('/cars', async (req,res) => {
  console.log('Request Body:', req.body);
  const newCar = await carsInterface.create(req.body); 
  res.status(201).send(newCar);
});

router.get('/cars/:id', async (req,res) => {
  let { id } = req.params;
  const update = await carsInterface.update(req.body, id); 
  res.status(200).send(`${update} update success`);
});

router.get('/cars/:id', async (req,res) => {
  let { id } = req.params;
  const deleted = await carsInterface.delete(id); 
  res.status(200).send(`${deleted} delete success`);
});

module.exports = router;
