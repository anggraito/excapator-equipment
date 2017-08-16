'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  });
  return User;
};
