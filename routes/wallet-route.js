import express from 'express';
const walletDao = require('../dao/wallet-dao');
const resp = require('../models/response');

const WalletRoute = express.Router();
WalletRoute.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

WalletRoute.get(`/customer/:customer_number/wallet`,(req,res)=>{
    let customerNumber=req.params.customer_number;
    let filter = {};
    if(customerNumber){
        filter.customerNumber = customerNumber;
    }
    walletDao.getWallet(filter,(error,data)=>{
        if(error){
            resp.notOk(res, error);
        }
        else if(data===null){
            resp.notFound(res, null)
        }
        else if(data){
            resp.ok(res, data);
        }
    })
    
})


export default WalletRoute;