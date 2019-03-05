var models = require('../models');

module.exports = {
	get:function (request, reply) {
        console.log(models.cities.findAll());
		return models.cities.findAll();
	},
	getOne:function (request, reply) {
		return models.cities.findById(request.params.id);
	},
	deleteOne:function(request,reply){
		return ('delete message, check if api is correct');
	},
	askDelete:function(request,reply){
		return ('set boolean askDelete to 0 if 1 and 1 if 0');
	}
};