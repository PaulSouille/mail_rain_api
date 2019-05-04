result = {};

class Api{


	errorParam () {
        result.code = 422;
        result.message = "Incorrect parameters";
        return (JSON.stringify(result));        
        
    }
    emptyParam(){
        result.code=422;
        result.message = "Empty parameters";
        return (JSON.stringify(result));
    }
    errorProcess(){
        result.code=500;
        result.message="Server result"
        return (JSON.stringify(result));
    }
    errorUpdate(data){
        result.code=417;
        result.message="error update."
        result.data = data;
        return (JSON.stringify(result));
    }
    errorUpdate(){
        result.code=417;
        result.message="error update."
        return (JSON.stringify(result));
    }
    successInsert(data){
        result.code=201;
        result.message="success"
        result.data = data;
        return (JSON.stringify(result));
    }
    successUpdate(data){
        result.code=201;
        result.message="success"
        result.data = data;
        return (JSON.stringify(result));
    }
};
module.exports = new Api();
