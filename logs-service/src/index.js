require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes');
const database = require('./config/database');

app.use(router);
const mongodbUri = `mongodb://${database[process.env.NODE_ENV].username}:${
  database[process.env.NODE_ENV].password
}@${database[process.env.NODE_ENV].host}:${
  database[process.env.NODE_ENV].port
}/${database[process.env.NODE_ENV].database}`;

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin'
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('--== logs service running ==--');
    });
  })
  .catch(error => console.log(error));
