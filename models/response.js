import CommonResponse  from './common-response';

function OK(res, data, responseCode, responseMessage){
    let commonResponse  = new CommonResponse();
    if(responseCode){
        commonResponse.responseCode = responseCode;
        commonResponse.responseMessage = responseMessage;
    }
    else{
        commonResponse.responseCode = "20";
        commonResponse.responseMessage = "OK";
    }
    commonResponse.data = data;
    res.json(commonResponse);
}

function NotOK(res, data, responseCode, responseMessage){
    const code = responseCode ? responseCode : "99";
    const message = responseMessage ? responseMessage : "Failed";
    OK(res, data, code, message);
}

function NotFound(res, data, responseCode, responseMessage){
    const code = responseCode ? responseCode : "04";
    const message = responseMessage ? responseMessage : "Data not found";
    OK(res, data, code, message);
}


exports.ok = OK;
exports.notOk = NotOK;
exports.notFound = NotFound;