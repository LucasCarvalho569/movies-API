'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const moviesGenres = [];
    for (let i = 1; i <= 10; i++) {
      const movieGenre = {
        movieId: i,
        genreId: faker.random.number({ min: 1, max: 5 })
      };
      moviesGenres.push(movieGenre);
    }

    return queryInterface.bulkInsert('MoviesGenres', moviesGenres);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MoviesGenres', null);
  }
};
