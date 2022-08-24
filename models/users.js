'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Roles}) {
      // define association here
      this.belongsToMany(Roles, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};