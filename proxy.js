const app = require('express')();
const httpProxy = require('express-http-proxy');
require('dotenv').config();

const usersService = httpProxy(process.env.USERS_SERVICE);
const moviesService = httpProxy(process.env.MOVIES_SERVICE);

app.get('/users-service/*', (req, res, next) => usersService(req, res, next));

app.get('/movies-service/*', (req, res, next) => moviesService(req, res, next));

app.listen(process.env.PORT);
