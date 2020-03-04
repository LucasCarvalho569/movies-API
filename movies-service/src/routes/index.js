const router = require('express').Router();

router.get('/movies/get', (req, res) => {
  res.json({ message: 'ok from movies' });
});

module.exports = router;
