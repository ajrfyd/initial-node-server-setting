const example = (sequelize, dataTypes) => {
  return sequelize.define('example', {
    userName: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    timestamps: true,
    paranoid: true
  })
};

export default example;