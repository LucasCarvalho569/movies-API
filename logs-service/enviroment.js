require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  enviroment: process.env.NODE_ENV,
  dbHost: process.env.MONGO_HOST,
  dbPort: process.env.MONGO_PORT,
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASS
};
