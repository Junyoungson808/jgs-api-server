'use strict';

const express = require('express');
const router = express.Router();
const { candyInterface } =  require('../models');

router.get('/candy', async (req,res) => {
  const candy = await candyInterface.read(); 
  res.status(200).json(candy);
});

router.get('/candy/:id', async (req,res) => {
  let { id } = req.params;
  const candy = await candyInterface.read(id); 
  res.status(200).json(candy);
});

router.post('/candy', async (req,res) => {
  console.log('Request Body:', req.body);
  const newCandy = await candyInterface.create(req.body); 
  res.status(201).send(newCandy);
});

router.get('/candy/:id', async (req,res) => {
  let { id } = req.params;
  const update = await candyInterface.update(req.body, id); 
  res.status(200).send(`${update} update success`);
});

router.get('/candy/:id', async (req,res) => {
  let { id } = req.params;
  const deleted = await candyInterface.delete(id); 
  res.status(200).send(`${deleted} delete success`);
});

module.exports = router;