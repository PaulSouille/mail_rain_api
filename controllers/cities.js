var models = require('../models');
var db = require('../tools/DataBase');
module.exports = {
	get:function (request, reply) {
		return models.cities.findAll();
	},
	getOne:function (request, reply) {
		return models.cities.findById(request.params.id);
	},
	setCity:function(request,reply){
		
		return db.query('CALL ps_update_cities (:city_id)', 
        	{replacements: { i_id_cities: request.city_id }}).then(data=>{
				console.log(data);
			})
  		
	}

};