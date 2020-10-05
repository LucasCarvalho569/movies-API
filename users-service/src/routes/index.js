const router = require('express').Router();
const usersRoutes = require('./userRouter');
const rolesRoutes = require('./roleRouter');

router.use('/users', usersRoutes);
router.use('/roles', rolesRoutes);

router.get('/health', (req, res) => res.sendStatus(200));

module.exports = router;
