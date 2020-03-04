const express = require('express');
const enviroment = require('../enviroment');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(enviroment.port, () => {
  console.log('-- users service running on port ' + enviroment.port);
});