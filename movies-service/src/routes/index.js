const router = require('express').Router();
const moviesRouter = require('./moviesRouter');

router.use('/movies', moviesRouter);

router.get('/health', (req, res) => res.sendStatus(200));

module.exports = router;
