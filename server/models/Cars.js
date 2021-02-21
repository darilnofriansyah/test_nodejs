const Sequelize = require('sequelize');
const db = require('../config/db');

const Cars = db.define('cars', {
    description: {
        type: Sequelize.STRING
    },
    type_id : {
        type: Sequelize.INTEGER
    },
}, {timestamps: false});

Cars.associate = models =>{
    Cars.belongsTo(models.Types, {
        foreignKey: 'types_id',
        targetKey: 'id'
    });
}

module.exports = Cars;