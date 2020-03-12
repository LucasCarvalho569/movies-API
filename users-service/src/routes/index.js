const router = require('express').Router();

router.get('/users/get', (req, res) => {
  res.json({ message: 'ok from users' });
});

module.exports = router;
