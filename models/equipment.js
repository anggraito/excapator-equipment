'use strict';
module.exports = function(sequelize, DataTypes) {
  var Equipment = sequelize.define('Equipment', {
    name_attr: DataTypes.STRING,
    spec: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Equipment;
};