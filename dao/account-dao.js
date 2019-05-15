const {Account} = require('../db/sequelize');
const Op = require('Sequelize').Op;

function createAccount(body,callback){
    let accountBody= {};
    accountBody.accountNumber= null;
    accountBody.fullName= body.firstName + " " + body.lastName;
    accountBody.bankName= "Elite Bank";
    accountBody.two_and_five= Math.random()*9999999;
    accountBody.cvv= Math.random()*999;
    accountBody.type= "Base";
    accountBody.date= new Date();
    accountBody.limit_or_balance= 0;
    accountBody.customerNumber=body.customerNumber;
    Account.create(accountBody).then((data)=>{
        callback(data)
    })
}

module.exports = { createAccount }