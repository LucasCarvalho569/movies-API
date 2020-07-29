const router = require('express').Router({ mergeParams: true });
const moviesService = require('../services/moviesService');

router.get('', async (req, res) => {
  res.json(await moviesService.findAll());
});

router.post('', async (req, res) => {
  res.json(moviesService.insert(req.body));
});

module.exports = router;
