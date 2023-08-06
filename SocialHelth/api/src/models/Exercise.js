const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Exercise = sequelize.define('Exercise', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Otras propiedades del ejercicio como descripción, categoría, etc.
  });

  return Exercise;
};
