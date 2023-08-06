const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Calories = sequelize.define('Calories', {
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades relacionadas con las calorías registradas.
  });

  // Relación con el usuario dueño de las calorías registradas
  Calories.belongsTo(User);

  return Calories;
};
