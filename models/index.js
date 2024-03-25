const { Sequelize } = require('sequelize');

// Inicialização do Sequelize com SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'storage/database.sqlite' // Caminho para o arquivo do banco de dados
});

// Verificar a conexão
async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conecction has been established successfully');
    } catch (error) {
        console.error('Banco de dados indisponível', error);
    }
}

checkConnection();

module.exports = { sequelize, Sequelize };