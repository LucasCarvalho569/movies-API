const { Role } = require('../models');

const insert = async role => {
  return await Role.create(role);
};

module.exports = { insert };
