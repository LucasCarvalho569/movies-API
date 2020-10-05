const { Movie, Actor, Genre } = require('../models');

const findAll = async () => {
  const movies = await Movie.findAll({
    include: [
      { model: Actor, as: 'actors' },
      { model: Genre, as: 'genres' }
    ]
  });

  return movies;
};

const insert = async body => {
  console.log(body);
};

module.exports = { findAll, insert };
