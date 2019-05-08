var models = require('../models');
var db = require('../tools/DataBase');
var ApiResponse = require('../tools/Api');
module.exports = {
	get:function () {
		return models.city.findAll().catch(err=>{
			console.log(err);
			return(ApiResponse.errorProcess());
		});
	},
	getOne:function (request) {
		return models.city.findById(request.params.city_id).catch(err=>{
			console.log(err);
			return(ApiResponse.errorProcess());
		});
	},
	setActiveCity:async function(request,resolve){
		return await db.query('CALL ps_update_city_status (:i_city_id)', 
			{replacements: { i_city_id: request.params.city_id }}, {
				model: models.city,
				mapToModel: true 
			  }).then(result=>{
				  if(result[0].isActive == 1){
					  return( ApiResponse.successUpdate(result[0]));
				  }
				  else{
					return(ApiResponse.errorUpdate(result[0]))
				  }
			  }).catch(err=>{
				  console.log(err);
				  return(ApiResponse.errorPr<ocess());
			  })
	}
};