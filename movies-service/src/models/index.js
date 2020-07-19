const { Sequelize, DataTypes } = require('sequelize');
const glob = require('glob');
const path = require('path');
const environment = require('../../config/environment');

const sequelize = new Sequelize(
  environment.dbName,
  environment.dbUser,
  environment.dbPassword,
  { dialect: 'mysql' }
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
