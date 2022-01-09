'use strict'

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'wallets', [{
                    name: 'Fulano da Silva',
                    cpf: '732.221.438-20',
                    birthdate: '2000-01-05',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pedro Torres',
                    cpf: '123.456.789-10',
                    birthdate: '2002-03-07',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], {}
        )
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('wallets', null, {})
    }
}