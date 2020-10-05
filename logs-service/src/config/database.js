module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_DATABASE,
    host: process.env.DEV_DATABASE_HOST,
    port: process.env.DEV_DATABASE_PORT
  },
  test: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_DATABASE,
    host: process.env.TEST_DATABASE_HOST,
    port: process.env.TEST_DATABASE_PORT
  },
  production: {
    username: process.env.PROD_DATABASE_USERNAME,
    password: process.env.PROD_DATABASE_PASSWORD,
    database: process.env.PROD_DATABASE_DATABASE,
    host: process.env.PROD_DATABASE_HOST,
    port: process.env.PROD_DATABASE_PORT
  }
};
