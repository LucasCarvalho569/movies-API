const express = require('express');
const environment = require('../config/environment');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(environment.port, () => {
  console.log('--== movies service running ==--');
});
