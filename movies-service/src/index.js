require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

module.exports = app;
