'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoviesGenres', {
      movieId: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
        references: {
          model: 'Movies',
          key: 'id'
        }
      },
      genreId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Genres',
          id: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MoviesGenres');
  }
};
