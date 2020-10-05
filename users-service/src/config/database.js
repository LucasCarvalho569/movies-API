require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_DATABASE,
    host: process.env.DEV_DATABASE_HOST,
    port: process.env.DEV_DATABASE_PORT,
    dialect: process.env.DEV_DATABASE_DIALECT,
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  },
  test: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_DATABASE,
    host: process.env.TEST_DATABASE_HOST,
    port: process.env.TEST_DATABASE_PORT,
    dialect: process.env.TEST_DATABASE_DIALECT,
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  },
  production: {
    username: process.env.PROD_DATABASE_USERNAME,
    password: process.env.PROD_DATABASE_PASSWORD,
    database: process.env.PROD_DATABASE_DATABASE,
    host: process.env.PROD_DATABASE_HOST,
    port: process.env.PROD_DATABASE_PORT,
    dialect: process.env.PROD_DATABASE_DIALECT,
    operatorsAliases: 0,
    seederStorage: 'sequelize'
  }
};
