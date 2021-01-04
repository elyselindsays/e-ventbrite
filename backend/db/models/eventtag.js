'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventTag = sequelize.define('EventTag', {
    eventId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  EventTag.associate = function (models) {



    EventTag.belongsTo(models.Event, { foreignKey: 'eventId' });
    EventTag.belongsTo(models.Tag, { foreignKey: 'tagId' });


  };
  return EventTag;
};