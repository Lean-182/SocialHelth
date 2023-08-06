const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const HeartRate = sequelize.define('HeartRate', {
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Otras propiedades relacionadas con el ritmo cardíaco.
  });

  // Definir la relación
  HeartRate.belongsTo(User);

  return HeartRate;
};
