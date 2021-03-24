const Sequelize = require('sequelize');

console.log(process.DB_HOST);
console.log(process.env);
const sequelize = new Sequelize(
  'library_db',
  'root',
  'myPassword',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
