'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            value: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            datetime: {
                allowNull: false,
                type: Sequelize.DATE
            },
            sendTo: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Wallet',
                    key: 'address',
                    as: 'sendTo',
                }
            },
            receiveFrom: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Wallet',
                    key: 'address',
                    as: 'sendTo',
                }
            },
            currentCotation: {
                allowNull: false,
                type: Sequelize.DOUBLE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('transactions');
    }
};