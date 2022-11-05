'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.belongsTo(models.User, {
        foreignKey: 'teacher_id'
      })
      Class.hasMany(models.Registry, {
        foreignKey: 'class_id'
      })
    }
  }
  Class.init({
    description: DataTypes.STRING,
    time: DataTypes.STRING,
    seats: DataTypes.INTEGER,
    initial: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};