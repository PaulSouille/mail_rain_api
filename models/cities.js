"use strict";

module.exports = function(sequelize,DataType) {
  var cities = sequelize.define("cities", {
    id: {type : DataType.DECIMAL,primaryKey : true},
    name: DataType.STRING,
    isActive: DataType.BOOLEAN,
  },
  {
    timestamps: false,
    tableName: 'cities'
  },
  {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return cities;
};
