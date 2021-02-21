const Sequelize = require('sequelize');
const db = require('../config/db');

const Types = db.define('types', {
    name: {
        type: Sequelize.STRING
    }
}, {timestamps: false});

Types.associate = models =>{
    Types.hasMany(models.Cars, {
        onDelete: "cascade"
    });
}

module.exports = Cars;