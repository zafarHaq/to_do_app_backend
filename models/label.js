'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Label.init({
    name: DataTypes.STRING,
    tid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};