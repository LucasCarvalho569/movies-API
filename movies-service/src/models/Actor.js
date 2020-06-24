module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actor',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      born: DataTypes.DATE,
      nationality: DataTypes.STRING
    },
    { timestamps: false }
  );

  Actor.associate = models => {
    Actor.belongsToMany(models.Movie, {
      through: 'MoviesActors',
      as: 'movies',
      foreignKey: 'actorId'
    });
  };

  return Actor;
};
