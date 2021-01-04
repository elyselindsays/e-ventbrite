'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.hasMany(models.EventTag, { foreignKey: 'eventId' })
  };
  return Tag;
};