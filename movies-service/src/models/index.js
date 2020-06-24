const { Sequelize, DataTypes } = require('sequelize');
const glob = require('glob');
const path = require('path');
const enviroment = require('../../config/enviroment');

const sequelize = new Sequelize(
  enviroment.dbName,
  enviroment.dbUser,
  enviroment.dbPassword,
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
