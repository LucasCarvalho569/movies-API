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
        allowNull: false
      }
    },
    { timestamps: false }
  );

  Role.associate = models => {
    Role.hasMany(models.User, { as: 'users', foreignKey: 'roleId' });
  };

  return Role;
};
