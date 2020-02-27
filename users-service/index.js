const express = require('express');
const enviroment = require('./enviroment');
const app = express();

app.listen(enviroment.port, () => {
  console.log('-- users service running on port ' + enviroment.port);
});
