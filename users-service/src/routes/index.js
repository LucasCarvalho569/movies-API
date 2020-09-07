const router = require('express').Router();
const usersRouter = require('./userRouter');

router.use('/users', usersRouter);

router.get('/health', (req, res) => res.sendStatus(200));

module.exports = router;
