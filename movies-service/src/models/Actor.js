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
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "The actor's name must contain only letters"
          },
          len: {
            args: [3, 100],
            msg: "The actor's name must have between 3 and 100 characters"
          }
        }
      },
      born: {
        type: DataTypes.DATE,
        validate: {
          isBefore: {
            args: new Date().toISOString().substring(0, 10),
            msg: "The Actor's born date is invalid"
          }
        }
      },
      nationality: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: "The Actor's nationality must contain only letters"
          },
          len: {
            args: [3, 100],
            msg:
              "The Actor's nationality must have between 3 and 100 characters"
          }
        }
      }
    },
    { timestamps: false }
  );

  Actor.associate = models => {
    Actor.belongsToMany(models.Movie, {
      through: 'MoviesActors',
      timestamps: false,
      as: 'movies',
      foreignKey: 'actorId'
    });
  };

  return Actor;
};
