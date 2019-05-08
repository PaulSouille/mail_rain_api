var fs = require("fs");
var path = require("path");
var controllers = require('../controllers');

var routes = [];
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var route = require(path.join(__dirname, file));
    routes = routes.concat(route)
    
  });
console.log(routes);
module.exports = routes;