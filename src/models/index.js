'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const customersSchema = require('./customers.schema');
const catSchema = require('./cat.schema');
const ModelInterface = require('./modelinterface');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL,
    dial);

//create FoodModel /  ClothesModel with our Schema
const CustomersModel = customersSchema(sequelizeDatabase, DataTypes);
const OrdersModel = catSchema(sequelizeDatabase, DataTypes);

CustomersModel.hasMany(OrdersModel);
OrdersModel.belongsTo(CustomersModel);

module.exports = {
  sequelizeDatabase,
  customerInterface: new ModelInterface(CustomersModel),
  ordersInterface: new ModelInterface(OrdersModel),
};
