var controllers = require('../controllers');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/city',
    handler: controllers.city.get,
    options: {
      cors : true,
      description: 'Get all city',
      tags: ['api'], 
    },
  },
  {
    method: 'GET',
    path: '/city/{city_id}',
    handler: controllers.city.getOne,
    options: {
      cors : true,
      description: 'Get a city by id',
      tags: ['api'],
      validate : {
        params: {
          city_id: Joi.string()
            .required()
            .description('The device id'),
        }
      }
    }
  },
  {
    method: 'PATCH',
    path: '/city/{city_id}',
    handler: controllers.city.setCity,
    options: {
      cors : true,
      description: 'Set active city by id',
      tags: ['api'],
      validate : {
        params: {
          city_id : Joi.string()
                    .required()
                    .description('The type id'),
        }
      }
    }
  },
];
