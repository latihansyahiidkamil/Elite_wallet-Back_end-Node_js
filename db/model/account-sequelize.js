module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        accountNumber: {
            field: 'account_number',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            field: 'full_name',
            type: DataTypes.STRING},
        bankName: {
            field: 'bank_name',
            type: DataTypes.STRING},
        two_and_five: DataTypes.INTEGER,
        cvv: DataTypes.INTEGER,
        type: DataTypes.STRING,
        date: DataTypes.DATE,
        limit_or_balance: DataTypes.INTEGER,
        customerNumber: {
            field: 'customer_number',
            type: DataTypes.INTEGER}
    }, {
            tableName: 'account',
            timestamps: false
        });

    return Account;
};