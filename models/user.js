'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    role: DataTypes.STRING
  });

  // User.associate = models=>{
  //   User.belongsToMany(models.Equipment, {through: 'UserEquipment'})
  // }

  return User;
};
