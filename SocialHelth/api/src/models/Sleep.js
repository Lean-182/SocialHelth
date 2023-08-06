const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Sleep = sequelize.define('Sleep', {
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades relacionadas con el sueño, como la calidad del sueño, horas de descanso profundo, etc.
  });

  // Relación con el usuario dueño del registro de sueño
  Sleep.belongsTo(User);

  return Sleep;
};
