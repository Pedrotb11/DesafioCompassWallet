'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class coins extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            coins.hasMany(models.transactions,
                coins.belongsTo(models.Wallet, {
                    foreignKey: 'coin_id',
                    as: 'coins',
                }))
        }
    };
    coins.init({
        coin: DataTypes.ENUM('ETH', 'BTC', 'BRL', 'USD'),
        fullname: DataTypes.STRING,
        amount: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: 'coins',
    });
    return coins;
};