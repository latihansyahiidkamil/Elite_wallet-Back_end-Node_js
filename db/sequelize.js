const Sequelize = require('sequelize');
const CustomerModel = require('./model/customer-sequelize');
const WalletModel = require('./model/wallet-sequelize');
const AccountModel = require('./model/account-sequelize');


const sequelize = new Sequelize('db_elite_wallet', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Customer = CustomerModel(sequelize, Sequelize);
const Wallet = WalletModel(sequelize, Sequelize);
const Account = AccountModel(sequelize, Sequelize);
module.exports = {
  Customer, Wallet, Account
};