const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CommonUser = sequelize.define('CommonUser', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Otras propiedades específicas del usuario común.
  });

  return CommonUser;
};
