'use strict';

var Hapi = require('hapi');

var path = require('path');
var settings = require('config');

var routes = require('./routes');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const AuthBearer = require('hapi-auth-bearer-token');

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
    title: 'Documentation API',
    version: Pack.version,
  },
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  }
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
  await server.register(AuthBearer)
  server.auth.strategy('simple', 'bearer-access-token', {
    allowQueryToken: true,
    validate: async (request, token, h) => {
      const isValid = token === settings.token;
      const credentials = { token };

      return { isValid, credentials };
    }
  });
  server.auth.default('simple');

  await server.start();
  initDb(()=>{
    console.log('Server is running at ' + server.info.uri);
  });
  server.route(routes);

}

internals.main();

module.exports = server;
