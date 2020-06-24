const router = require('../../../movies-service/src/routes');

const routes = require('express').Router();

router.get('/log', (req, res) => {
  res.json({ message: 'ok from logs' });
});
