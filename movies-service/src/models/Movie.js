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
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "The movie's name must contain only letters"
          },
          len: {
            args: [3, 100],
            msg: "The movie's name must have between 3 and 100 characters"
          }
        }
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: "The movie's release year must be a number"
          },
          min: {
            args: 1895,
            msg: "The movie's release year must be above 1895"
          },
          max: {
            args: new Date().getFullYear(),
            msg: "The movie's release year can't be in the future"
          }
        }
      },
      synopsis: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [0, 65535],
            msg: "The movie's synopsis is too long"
          }
        }
      }
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
