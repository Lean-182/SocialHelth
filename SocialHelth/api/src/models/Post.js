const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Otras propiedades del post, como fotos, enlaces, etc.
  });

  // Relación con el usuario que creó el post
  Post.belongsTo(User);

  return Post;
};
