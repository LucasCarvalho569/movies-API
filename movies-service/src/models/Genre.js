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
        allowNull: false
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
