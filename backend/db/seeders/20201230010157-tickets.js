'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tickets', [
      { eventId: 1, userId: 1, bookmark: false },
      { eventId: 1, userId: 2, bookmark: true },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tickets', null, {});

  }
};
