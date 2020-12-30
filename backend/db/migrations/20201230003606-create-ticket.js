'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: { model: 'Events' }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      bookmark: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {

        type: Sequelize.DATE
      },
      updatedAt: {

        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tickets');
  }
};