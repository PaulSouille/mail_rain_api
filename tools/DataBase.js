var config    = require("config").database;
var Sequelize = require("sequelize");

var sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports=sequelize;