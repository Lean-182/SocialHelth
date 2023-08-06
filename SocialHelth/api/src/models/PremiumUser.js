const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PremiumUser = sequelize.define('PremiumUser', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Otras propiedades específicas del usuario premium.
  });

  return PremiumUser;
};
