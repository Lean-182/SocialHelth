const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Weight = sequelize.define('Weight', {
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Otras propiedades relacionadas con el peso, como unidad de medida, etc.
  });

  // Relación con el usuario dueño del peso registrado
  Weight.belongsTo(User);

  return Weight;
};
