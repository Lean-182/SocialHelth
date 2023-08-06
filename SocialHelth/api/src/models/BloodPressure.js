const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BloodPressure = sequelize.define('BloodPressure', {
    systolic: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diastolic: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades relacionadas con la presión arterial.
  });

  // Relación con el usuario dueño de la presión arterial registrada
  BloodPressure.belongsTo(User);

  return BloodPressure;
};
