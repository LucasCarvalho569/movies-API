module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
            msg: "The user's name must contain only letters"
          },
          len: {
            args: [3, 100],
            msg: "The user's name must have between 3 and 100 characters"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "The user's email is invalid"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Roles',
          id: 'id'
        }
      }
    },
    { timestamps: false }
  );

  User.associate = models => {
    User.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' });
  };

  return User;
};
