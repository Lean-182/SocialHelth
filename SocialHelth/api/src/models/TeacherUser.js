const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TeacherUser = sequelize.define('TeacherUser', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Otras propiedades específicas del usuario docente.
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Propiedades adicionales relacionadas con el rol docente.
  });

  return TeacherUser;
};
