'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Actors', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      born: Sequelize.DataTypes.DATE,
      nationality: Sequelize.DataTypes.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Actors');
  }
};
