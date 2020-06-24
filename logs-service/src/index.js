const express = require('express');
const enviroment = require('../config/enviroment');
const app = express();
const mongoose = require('mongoose');

const mongodbUri = `mongodb://${enviroment.dbHost}:${enviroment.dbPort}/${enviroment.dbName}`;

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(enviroment.port, () => {
      console.log('-- logs service running on port ' + enviroment.port);
    });
  })
  .catch(error => console.log(error));