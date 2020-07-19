const express = require('express');
const environment = require('../config/environment');
const app = express();
const mongoose = require('mongoose');

const mongodbUri = `mongodb://${environment.dbUser}:${environment.dbPassword}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`;

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin'
  })
  .then(() => {
    app.listen(environment.port, () => {
      console.log(
        '-- logs service running on port ' +
          environment.port +
          environment.environment
      );
    });
  })
  .catch(error => console.log(error));
