'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const customersSchema = require('./people.schema');
const ordersSchema = require('./food.schema');
const ModelInterface = require('./modelinterface');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create FoodModel /  ClothesModel with our Schema
const CustomersModel = customersSchema(sequelizeDatabase, DataTypes);
const OrdersModel = ordersSchema(sequelizeDatabase, DataTypes);

CustomersModel.hasMany(OrdersModel);
OrdersModel.belongsTo(CustomersModel);

module.exports = {
  sequelizeDatabase,
  customerInterface: new ModelInterface(CustomersModel),
  ordersInterface: new ModelInterface(OrdersModel),
};
