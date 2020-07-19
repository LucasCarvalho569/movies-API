const environment = require('./environment');

module.exports = {
  development: {
    username: environment.dbUser,
    password: environment.dbPassword,
    database: environment.dbName,
    host: environment.dbHost,
    port: environment.dbPort,
    dialect: 'mysql',
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  },
  test: {
    username: environment.dbUser,
    password: environment.dbPassword,
    database: environment.dbName,
    host: environment.dbHost,
    port: environment.dbPort,
    dialect: 'mysql',
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  },
  production: {
    username: environment.dbUser,
    password: environment.dbPassword,
    database: environment.dbName,
    host: environment.dbHost,
    port: environment.dbPort,
    dialect: 'mysql',
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  }
};
