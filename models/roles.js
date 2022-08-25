'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsToMany(Users, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
    }
    toJSON(){
      return {...this.get(), id:undefined}
    }
    }
  
  Roles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles'
  });
  return Roles;
};