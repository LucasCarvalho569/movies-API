require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  enviroment: process.env.NODE_ENV,
  dbHost: process.env.MYSQL_URL,
  dbPort: process.env.MYSQL_PORT,
  dbUser: process.env.MYSQL_USERNAME,
  dbName: process.env.MYSQL_DB,
  dbPassword: process.env.MYSQL_PASSWORD
};
