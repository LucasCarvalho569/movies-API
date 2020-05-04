'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const genreList = ['Drama', 'Comedy', 'Thriller', 'Romance', 'Action'];
    const genres = [];
    for (let i = 1; i <= genreList.length; i++) {
      genres.push({
        id: i,
        name: genreList[i - 1]
      });
    }

    return queryInterface.bulkInsert('Genres', genres);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null);
  }
};
