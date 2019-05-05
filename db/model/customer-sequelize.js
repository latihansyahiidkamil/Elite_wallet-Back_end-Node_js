module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        customerNumber: {
            field: 'customer_number',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field: 'first_name',
            type: DataTypes.STRING
        },
        lastName: {
            field: 'last_name',
            type: DataTypes.STRING
        },
        birthDate: {
            field: 'birth_date',
            type: DataTypes.STRING
        },
        nationalId: {
            field: 'national_id',
            type: DataTypes.STRING
        },
        motherName: {
            field: 'mother_name',
            type: DataTypes.STRING
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
            tableName: 'customer',
            timestamps: false
        });

    return Customer;
};