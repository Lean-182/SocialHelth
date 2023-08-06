const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Nutrition = sequelize.define('Nutrition', {
    food: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades relacionadas con la nutrición, como proteínas, grasas, carbohidratos, etc.
  });

  // Relación con el usuario dueño del registro de nutrición
  Nutrition.belongsTo(User);

  return Nutrition;
};
