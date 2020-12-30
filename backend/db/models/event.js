'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Event.associate = function (models) {


    const columnMapping = {
      through: 'Ticket',
      otherKey: 'userId',
      foreignKey: 'eventId'
    }

    Event.belongsToMany(models.User, columnMapping)
  };
  return Event;
};