module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
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
            msg: "The role's name must contain only letters"
          },
          len: {
            args: [3, 100],
            msg: "The role's name must have between 3 and 100 characters"
          }
        }
      }
    },
    { timestamps: false }
  );

  Role.associate = models => {
    Role.hasMany(models.User, { as: 'users', foreignKey: 'roleId' });
  };

  return Role;
};
