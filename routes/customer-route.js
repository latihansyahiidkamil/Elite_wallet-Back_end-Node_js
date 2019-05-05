import express from 'express';
const customerDao = require('../dao/customer-dao');
const resp = require('../models/response');

const CustomerRoute = express.Router();

// /customer?customer-number=12345&national-id=abcde
CustomerRoute.get('/customer', (req, res)=>{
    let filter = {};
    if(req.query.customerNumber){
        filter.customerNumber = req.query.customerNumber;
    }
    if(req.query.nationalId){
        filter.nationalId = req.query.nationalId;
    };
    customerDao.getCustomer(filter,(error,data)=>{
        if(error){
            resp.notOk(res, error);
        }
        else if(data===null){
            resp.notFound(res, filter)
        }
        else if(data){
            data.password=null;
            resp.ok(res, data);
        }
    })
})

CustomerRoute.post('/customer', (req, res, next) => {
    customerDao.register(req.body, function(error, data){
        if(error){
            resp.notOk(res, error,"99","nationalId or email or username has been used");
        }
        else if(data){
            data.password=null;
            resp.ok(res,data)
        }
        else{
            resp.notOk(res, error,"99","nationalId or email or username has been used");
        }
    });
  });

CustomerRoute.post('/login', (req, res, next) => {
    customerDao.login(req.body, function(error, data){
        if(error){
            resp.notOk(res, error,"99","email/username or password is wrong");
        }else if(data){
            if(data.password==req.body.password){
                resp.ok(res, null);
            }
            else{
                resp.notOk(res, null,"99","email/username or password is wrong");    
            }
        }else{
            resp.notOk(res,null,"99","email/username or password is wrong");
        }
    });
  });

  CustomerRoute.put('/customer', (req, res, next) => {
    customerDao.update(req.body,function(error,data){
        if(error){
            resp.notOk(res, error,"99","uknown error updated failed");
        }
        else{
            data.password=null;
            resp.ok(res,data)
        }
    })
  })




export default CustomerRoute;