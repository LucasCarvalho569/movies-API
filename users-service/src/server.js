const app = require('./index');

app.listen(process.env.PORT, () => {
  console.log('--== users service running ==--');
});
