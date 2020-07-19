require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  dbHost:
    process.env.NODE_ENV === 'development'
      ? process.env.MONGO_URL
      : process.env.MONGO_URL_PROD,
  dbName: process.env.MONGO_DB,
  dbPort: process.env.MONGO_PORT,
  dbUser: process.env.MONGO_USERNAME,
  dbPassword: process.env.MONGO_PASSWORD
};
