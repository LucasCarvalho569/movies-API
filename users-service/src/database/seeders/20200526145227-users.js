'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [
      { name: 'admin', email: 'admin@admin.com', password: 'admin', role: 1 },
      {
        name: 'lucas',
        email: 'lucas.carvalho569@gmail.com',
        password: 'lucas',
        role: 2
      }
    ];

    return queryInterface.bulkInsert('Users', users);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null);
  }
};
