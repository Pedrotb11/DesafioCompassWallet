'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('coins', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            coin: {
                allowNull: false,
                type: Sequelize.ENUM(['ETH', 'BTC', 'BRL', 'USD']),
                required: true,
            },
            fullname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            amount: {
                allowNull: false,
                type: Sequelize.DOUBLE,
                required: true
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('coins');
    }
};