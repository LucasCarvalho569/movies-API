const app = require('./index');

app.listen(process.env.PORT, () => {
  console.log('--== movies service running ==--');
});
