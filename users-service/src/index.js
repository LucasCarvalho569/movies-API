const express = require('express');
const environment = require('../config/environment');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(environment.port, () => {
  console.log('-- users service running on port ' + environment.port);
});
