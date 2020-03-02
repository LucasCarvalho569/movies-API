const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('bateu');
  res.json({ message: 'ok from users' });
});

module.exports = router;
