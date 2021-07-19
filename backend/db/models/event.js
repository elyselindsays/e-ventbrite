'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Event.associate = function (models) {

    Event.hasMany(models.Ticket, { foreignKey: 'eventId' })
    Event.hasMany(models.EventTag, { foreignKey: 'eventId' })
  };
  return Event;
};