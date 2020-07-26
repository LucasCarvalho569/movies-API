module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "The genre's name must contain only letters"
          },
          len: {
            args: [3, 100],
            msg: "The genre's name must have between 3 and 100 characters"
          }
        }
      }
    },
    { timestamps: false }
  );

  Genre.associate = models => {
    Genre.belongsToMany(models.Movie, {
      through: 'MoviesGenres',
      timestamps: false,
      as: 'movies',
      foreignKey: 'genreId'
    });
  };

  return Genre;
};
