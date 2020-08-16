'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const moviesActors = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        const movieActor = { movieId: i, actorId: (i - 1) * 10 + j };
        moviesActors.push(movieActor);
      }
    }

    return queryInterface.bulkInsert('MoviesActors', moviesActors);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MoviesActors', null);
  }
};
