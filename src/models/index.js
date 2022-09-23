'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const peopleSchema = require('./people.schema');
const foodSchema = require('./food.schema');
// const ModelInterface = require('./modelinterface');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create FoodModel /  ClothesModel with our Schema
const PeopleModel = peopleSchema(sequelizeDatabase, DataTypes);
const FoodModel = foodSchema(sequelizeDatabase, DataTypes);

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection');
  })
  .catch(err => console.error(err));

module.exports = {
  sequelizeDatabase,
  PeopleModel,
  FoodModel,
//   customerInterface: new ModelInterface(CustomerModel),
};
