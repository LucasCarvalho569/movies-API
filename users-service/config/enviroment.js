require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  enviroment: process.env.NODE_ENV,
  dbHost: process.env.MYSQL_HOST,
  dbPort: process.env.MYSQL_PORT,
  dbUser: process.env.MYSQL_USER,
  dbPassword: process.env.MYSQL_PASS
};
