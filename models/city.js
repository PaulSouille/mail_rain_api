"use strict";

module.exports = function(sequelize,DataType) {
  var city = sequelize.define("city", {
    id: {type : DataType.DECIMAL,primaryKey : true},
    name: DataType.STRING,
    isActive: DataType.BOOLEAN,
  },
  {
    timestamps: false,
    tableName: 'city'
  },
  {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return city;
};
