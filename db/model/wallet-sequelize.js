module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('wallet', {
        walletId: {
            field: 'wallet_id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idr: DataTypes.INTEGER,
        usd: DataTypes.INTEGER,
        aapl: DataTypes.INTEGER,
        orcl: DataTypes.INTEGER,
        idr_w_account_number: DataTypes.INTEGER,
        assets_w_account_number: DataTypes.INTEGER,
        customerNumber: {
            field: 'customer_number',
            type: DataTypes.INTEGER}
    }, {
            tableName: 'wallet',
            timestamps: false
        });

    return Wallet;
};