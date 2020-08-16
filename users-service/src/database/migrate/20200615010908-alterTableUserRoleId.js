'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'role', 'roleId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'roleId', 'role');
  }
};
