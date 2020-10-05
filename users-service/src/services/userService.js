const { User } = require('../models');
const { hashSync } = require('bcryptjs');

const insert = async user => {
  user.password = hashSync(user.password);
  return await User.create(user);
};

module.exports = { insert };
