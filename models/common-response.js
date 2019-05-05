class CommonResponse{
    constructor(responseCode, responseMessage, data){
        this.responseCode = responseCode ? responseCode : "00";
        this.responseMessage = responseMessage ? responseMessage : "Success";
        this.data = data;
    }
}

module.exports = CommonResponse;