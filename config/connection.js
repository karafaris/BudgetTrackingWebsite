const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('resources_db', 'root', process.env.DB_PASSWORD, { // Using process.env.DB_PASSWORD for the password
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
