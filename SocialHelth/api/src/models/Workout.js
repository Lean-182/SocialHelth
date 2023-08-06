const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Workout = sequelize.define('Workout', {
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades de la sesión de ejercicio.
  });

  // Definir las relaciones
  Workout.belongsTo(User);
  Workout.belongsTo(Exercise);

  return Workout;
};
