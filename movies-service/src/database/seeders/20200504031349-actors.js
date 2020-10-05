'use strict';
const faker = require('faker');
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const actors = [];

    for (let i = 1; i <= 100; i++) {
      actors.push({
        id: i,
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        born: faker.date.past(
          10,
          moment()
            .subtract(20, 'years')
            .toDate()
        ),
        nationality: faker.address.country()
      });
    }

    return queryInterface.bulkInsert('Actors', actors);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actors', null);
  }
};
