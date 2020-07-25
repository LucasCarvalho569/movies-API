module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      id: {
        type: DataTypes.FLOAT,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      synopsis: DataTypes.TEXT
    },
    { timestamps: false }
  );

  Movie.associate = models => {
    Movie.belongsToMany(models.Actor, {
      through: 'MoviesActors',
      timestamps: false,
      as: 'actors',
      foreignKey: 'movieId'
    });
    Movie.belongsToMany(models.Genre, {
      through: 'MoviesGenres',
      timestamps: false,
      as: 'genres',
      foreignKey: 'movieId'
    });
  };

  return Movie;
};
