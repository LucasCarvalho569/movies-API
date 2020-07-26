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
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      born: Sequelize.DataTypes.DATE,
      nationality: Sequelize.DataTypes.STRING(100)
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Actors');
  }
};
