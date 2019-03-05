error = {};

module.exports = {
	errorParam:function (request, reply) {
        error.code = "404";
        error.message = "Paramètre incorrect";
        return (JSON.stringify(error));        
        
    }
};
