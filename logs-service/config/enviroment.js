require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  enviroment: process.env.NODE_ENV,
  dbHost: process.env.MONGO_URL,
  dbName: process.env.MONGO_DB,
  dbPort: process.env.MONGO_PORT,
  dbUser: process.env.MONGO_USERNAME,
  dbPassword: process.env.MONGO_PASSWORD
};
