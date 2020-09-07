const router = require('express').Router({ mergeParams: true });
const userService = require('../services/userService');

router.post('', async (req, res) => {
  console.log(req.body);
  res.json(await userService.insert(req.body));
});

module.exports = router;
