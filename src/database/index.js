import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

import Wallet from '../app/models/wallet';

const models = [Wallet];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);

        models
            .map((model) => model.init(this.connection))
            .map((model) => {
                if (model.associate) model.associate(this.connection.models);
                return model;
            });
    }
}

export default new DataBase();