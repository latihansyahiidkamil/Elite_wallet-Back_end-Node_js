const {Customer} = require('../db/sequelize');
const Op = require('Sequelize').Op;

function getCustomer(filter, callback){
    Customer.findOne({
        where: filter
    }).then((data) => {
        callback(null, data);
    })
}
function register(body,callback){
    Customer.findOne({
        where:{
            [Op.or]:[{nationalId: body.nationalId},
                    {email: body.email},
                    {email: body.username},
                    {username: body.username},
                    {username: body.email}
            ]
        }
    }).then((data)=>{
        if(data){
            let message="";
            if(data.nationalId==body.nationalId){
                message=message+"national_ID "
            }
            if(data.email==body.email){
                message=message+"email "
            };
            if(data.username==body.username){
                message=message+"username"
            }
            callback(message,null)
        }
        else{
            Customer.create(body).then((data)=>{
                callback(null,data)
            })
        }
    })   
}


function login(body,callback){
    let username_filter = {};
    let email_filter = {};    
    if(body.username){
        username_filter.username = body.username;
    }
    if(body.email){
        email_filter.email = body.email;
    }
    else{
        return callback(null,null)
    }
    Customer.findOne({
        where: {
            [Op.or]:[username_filter, email_filter]
        }
    }).then((data) => {
        callback(null, data);
    })
}


function update(body,callback){
    Customer.update(
        {password: body.password},
        {where : {username: body.username}}
        ).then((data) =>{
        callback(null,data);
    })
}


module.exports = {getCustomer, register, login, update};