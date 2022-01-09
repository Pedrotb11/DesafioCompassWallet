'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Walleties', {
            address: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                id: true
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            cpf: {
                allowNull: false,
                type: Sequelize.STRING
            },
            birthdate: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            coins: {
                allowNull: false,
                type: Sequelize.STRING,
                references: { model: 'Coins', key: 'coin' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Walleties');
    }
};