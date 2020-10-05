const { Sequelize, DataTypes } = require('sequelize');
const glob = require('glob');
const path = require('path');
const database = require('../config/database');

const sequelize = new Sequelize(
  database[process.env.NODE_ENV].database,
  database[process.env.NODE_ENV].username,
  database[process.env.NODE_ENV].password,
  {
    dialect: database[process.env.NODE_ENV].dialect,
    port: database[process.env.NODE_ENV].port,
    logging: false
  }
);
const models = [];

glob.sync('src/models/*.js').forEach(function(file) {
  if (path.basename(file) !== 'index.js') {
    models.push(require(path.resolve(file))(sequelize, DataTypes));
  }
});

const exportingModels = {};

models.forEach(model => {
  model.associate(sequelize.models);
  exportingModels[model.name] = model;
});

module.exports = exportingModels;
