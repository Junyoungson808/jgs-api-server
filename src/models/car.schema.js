'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('car', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
