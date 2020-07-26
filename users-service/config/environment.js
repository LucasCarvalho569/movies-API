require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  dbHost:
    process.env.NODE_ENV === 'development'
      ? process.env.MYSQL_URL
      : process.env.MYSQL_URL_PROD,
  dbPort: process.env.MYSQL_PORT,
  dbUser: process.env.MYSQL_USERNAME,
  dbName: process.env.MYSQL_DB,
  dbPassword: process.env.MYSQL_PASSWORD
};
