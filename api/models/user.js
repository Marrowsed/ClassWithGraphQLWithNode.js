'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'role'
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateName: (data) => {
          data.length < 3 ? new Error('"Name" field needs more than 3 characters') : null
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};