const { User } = require('../models');
const bcrypt = require('bcryptjs');

const insert = async user => {
  user.password = bcrypt.hashSync(user.password);
  return await User.create(user);
};

module.exports = { insert };
