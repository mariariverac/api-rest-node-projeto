const { sequelize, Sequelize } = require('./index');

const User = sequelize.define('user', {
    // Exemplo de definição de atributos
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = User;