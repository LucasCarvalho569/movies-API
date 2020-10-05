const router = require('express').Router({ mergeParams: true });
const roleService = require('../services/roleService');

router.post('', async (req, res) => {
  res.json(await roleService.insert(req.body));
});

module.exports = router;
