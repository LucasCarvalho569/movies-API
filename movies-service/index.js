const express = require('express');
const enviroment = require('./enviroment');
const app = express();

app.listen(enviroment.port, () => {
  console.log('-- movies service running on port ' + enviroment.port);
});
