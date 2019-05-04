var models = require('../models');
var db = require('../tools/DataBase');
var ApiResponse = require('../tools/Api');
module.exports = {
	get:function (request, reply) {
		return models.city.findAll();
	},
	getOne:function (request, reply) {
		return models.city.findById(request.params.city_id);

	},
	setCity:function(request,reply){

		return new Promise((resolve)=>{
			db.query('CALL ps_update_city_status (:i_city_id)', 
			{replacements: { i_city_id: request.params.city_id }}, {
				model: models.city,
				mapToModel: true 
			  }).then(result=>{
				  if(result[0].isActive == 1){
					  resolve( ApiResponse.successUpdate(result[0]));
				  }
				  else{
					  resolve(ApiResponse.errorUpdate(result[0]))
				  }
			  }).catch(err=>{
				  console.log(err);
				  resolve(ApiResponse.errorUpdate());
			  })
		  
		})
	}

};