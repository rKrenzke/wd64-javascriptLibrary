const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'postgres', 'Mast3rGandal1f', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;