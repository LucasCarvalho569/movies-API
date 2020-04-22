const enviroment = require('./enviroment');

module.exports = {
  development: {
    username: enviroment.dbUser,
    password: enviroment.dbPassword,
    database: enviroment.dbName,
    host: enviroment.dbHost,
    dialect: 'mysql',
    operatorsAliases: 0
  },
  test: {
    username: enviroment.dbUser,
    password: enviroment.dbPassword,
    database: enviroment.dbName,
    host: enviroment.dbHost,
    dialect: 'mysql',
    operatorsAliases: 0
  },
  production: {
    username: enviroment.dbUser,
    password: enviroment.dbPassword,
    database: enviroment.dbName,
    host: enviroment.dbHost,
    dialect: 'mysql',
    operatorsAliases: 0
  }
};
