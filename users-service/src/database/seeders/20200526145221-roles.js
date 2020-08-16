'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const roles = [{ name: 'Admin' }, { name: 'Guest' }];
    return queryInterface.bulkInsert('Roles', roles);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null);
  }
};
