'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Registry.belongsTo(models.User, {
        foreignKey: 'student_id'
      })
      Registry.belongsTo(models.Class, {
        foreignKey: 'class_id'
      })
    }
  }
  Registry.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registry',
  });
  return Registry;
};