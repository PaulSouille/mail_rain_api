error = {};

class Api{


	errorParam () {
        error.code = 422;
        error.message = "Incorrect parameters";
        return (JSON.stringify(error));        
        
    }
    emptyParam(){
        error.code=422;
        error.message = "Empty parameters";
        return (JSON.stringify(error));
    }
    errorProcess(){
        error.code=500;
        error.message="Server error"
        return (JSON.stringify(error));

    }
    successInsert(){
        error.code=201;
        error.message="Success"
        return (JSON.stringify(error));
    }
};
module.exports = new Api();
