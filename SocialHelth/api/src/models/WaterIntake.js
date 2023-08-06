const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WaterIntake = sequelize.define('WaterIntake', {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades relacionadas con el consumo de agua, como la fuente de agua, tipo de bebida, etc.
  });

  // Relación con el usuario dueño del registro de consumo de agua
  WaterIntake.belongsTo(User);

  return WaterIntake;
};
