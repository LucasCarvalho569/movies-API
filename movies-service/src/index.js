const express = require('express');
const enviroment = require('../config/enviroment');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(enviroment.port, () => {
  console.log('-- movies service running on port ' + enviroment.port);
});
