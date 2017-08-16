'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserEquipment = sequelize.define('UserEquipment', {
    UserId: DataTypes.INTEGER,
    EquipmentId: DataTypes.INTEGER,
    TglPengembalian: DataTypes.DATE,
    Qty: DataTypes.INTEGER
  });

  UserEquipment.associate = models=>{
    UserEquipment.belongsTo(models.User)
    UserEquipment.belongsTo(models.Equipment)
  }

  return UserEquipment;
};
