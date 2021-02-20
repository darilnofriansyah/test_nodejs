const Sequelize = require('sequelize');
const db = new Sequelize('vehicle', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err.message));

module.exports = db;