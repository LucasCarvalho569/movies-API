'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const movies = [];
    for (let i = 1; i <= 10; i++) {
      movies.push({
        id: i,
        name: 'The ' + faker.hacker.adjective() + ' ' + faker.hacker.noun(),
        releaseYear: faker.date.past(10, new Date()).getFullYear(),
        synopsis: faker.lorem.paragraphs(2)
      });
    }

    return queryInterface.bulkInsert('Movies', movies);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null);
  }
};
