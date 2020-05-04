'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.DataTypes.FLOAT,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      releaseYear: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      synopsis: Sequelize.DataTypes.TEXT
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
