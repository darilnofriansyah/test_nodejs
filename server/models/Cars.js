const Sequelize = require('sequelize');
const db = require('../config/db');

const Cars = db.define('cars', {
    description: {
        type: Sequelize.STRING
    }
}, {timestamps: false});

module.exports = Cars;