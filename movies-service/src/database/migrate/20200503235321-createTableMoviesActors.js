'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoviesActors', {
      movieId: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
        references: {
          model: 'Movies',
          key: 'id'
        }
      },
      actorId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Actors',
          id: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MoviesActors');
  }
};
