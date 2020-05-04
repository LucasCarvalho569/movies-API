const express = require('express');
const enviroment = require('../config/enviroment');
const app = express();

app.listen(enviroment.port, () => {
  console.log('-- logs service running on port ' + enviroment.port);
});
