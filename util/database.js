const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mh14jt4266', {
     dialect: 'mysql',
     host: 'localhost',
});

module.exports = sequelize;
