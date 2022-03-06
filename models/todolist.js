'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToDoList.init({
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ToDoList',
  });
  return ToDoList;
};