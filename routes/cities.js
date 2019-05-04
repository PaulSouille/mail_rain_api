var controllers = require('../controllers');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/cities',
    handler: controllers.cities.get,
    options: {
      cors : true,
      description: 'Get all cities',
      tags: ['api'], 
    },
  },
  {
    method: 'GET',
    path: '/cities/{id}',
    handler: controllers.cities.getOne,
    options: {
      cors : true,
      description: 'Get a city by id',
      tags: ['api'],
      validate : {
        params: {
            id : Joi.number().integer()
                    .required()
                    .description('The type id'),
        }
      }
    }
  },
  {
    method: 'PATCH',
    path: '/cities/{id}',
    handler: controllers.cities.setCity,
    options: {
      cors : true,
      description: 'Set active city by id',
      tags: ['api'],
      validate : {
        params: {
            id : Joi.number().integer()
                    .required()
                    .description('The type id'),
        }
      }
    }
  },
];
