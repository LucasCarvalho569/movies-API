const enviroment = require('./enviroment');

module.exports = {
  development: {
    username: enviroment.dbUser,
    password: enviroment.dbPassword,
    database: enviroment.dbName,
    host: enviroment.dbHost,
    port: enviroment.dbPort,
    dialect: 'mysql',
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  },
  test: {
    username: enviroment.dbUser,
    password: enviroment.dbPassword,
    database: enviroment.dbName,
    host: enviroment.dbHost,
    port: enviroment.dbPort,
    dialect: 'mysql',
    operatorsAliases: 0
  },
  production: {
    username: enviroment.dbUser,
    password: enviroment.dbPassword,
    database: enviroment.dbName,
    host: enviroment.dbHost,
    port: enviroment.dbPort,
    dialect: 'mysql',
    operatorsAliases: 0
  }
};
