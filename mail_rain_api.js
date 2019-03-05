'use strict';

var Hapi = require('hapi');

var path = require('path');
var settings = require('config');

var routes = require('./routes');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');


const internals = {
  templatePath: '.'
};

const server = new Hapi.Server({
  host:settings.host,
  port: settings.port
});


const swaggerOptions = {
  info: {
          title: 'Documentation',
          version: Pack.version,


      },
  };


var initDb = function(cb){
  cb();
};



internals.main = async () => {
  await server.register([
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
    
  ]);
  await server.register(require('inert'));

  await server.start();
  initDb(()=>{
    console.log('Server is running at ' + server.info.uri);
  });
  server.route(routes);

}

internals.main();

module.exports = server;
