import { Model, DataTypes } from 'sequelize'

class Wallet extends Model {
    static init(sequelize) {
        super.init({
            address: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            name: DataTypes.STRING,
            cpf: DataTypes.INTEGER,
            birthdate: DataTypes.DATEONLY,
            coin: DataTypes.STRING //qqr coisa remover
        }, {
            sequelize,
            tableName: 'Wallet',
        });
        return this;
    };

    // static associate(models) {
    //     Wallety.hasMany(models.coins)
    //     Wallety.hasMany(models.transactions)
    // }
}

export default Wallet