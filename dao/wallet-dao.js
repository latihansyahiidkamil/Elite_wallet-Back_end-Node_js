const {Wallet} = require('../db/sequelize');
const Op = require('Sequelize').Op;

function getWallet(filter, callback){
    Wallet.findOne({
        where: filter
    }).then((data) => {
        callback(null, data);
    })
}

function addWallet(body, callback){
    let walletBody= {};
    walletBody.walletId= null;
    walletBody.idr= 0;
    walletBody.usd= 0;
    walletBody.aapl= 0;
    walletBody.orcl= 0;
    walletBody.idr_w_account_number= body.accountNumber;
    walletBody.assets_w_account_number= 1200000;
    walletBody.customerNumber= body.customerNumber;
    Wallet.create(walletBody).then((data)=>{
        callback(data)
    })
}

function updateWallet(body, callback){
    Wallet.update(
        {idr: body.idr},
        {usd: body.usd},
        {aapl: body.aapl},
        {orcl: body.orcl},
        {where : {customer_number: body.customer_number}}
    ).then((data) => {
        callback(null,data)
    })
}

module.exports = {getWallet, addWallet, updateWallet};