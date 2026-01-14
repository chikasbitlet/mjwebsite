const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Design = sequelize.define("Design", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  image_url: DataTypes.STRING,
  is_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Design;
