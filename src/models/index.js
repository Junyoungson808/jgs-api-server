'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const candySchema = require('./candy.schema');
const carSchema = require('./car.schema');
const ModelInterface = require('./interface');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiates our database
// const sequelizeDatabase = new Sequelize(DATABASE_URL);

const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//create FoodModel /  ClothesModel with our Schema
const candyModel = candySchema(sequelizeDatabase, DataTypes);
const carModel = carSchema(sequelizeDatabase, DataTypes);

// candyModel.hasMany(OrdersModel);
// carModel.belongsTo(CustomersModel);

module.exports = {
  sequelizeDatabase,
  candyInterface: new ModelInterface(candyModel),
  carInterface: new ModelInterface(carModel),
};
