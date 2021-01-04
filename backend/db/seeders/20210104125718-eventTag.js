'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('EventTags', [
      { eventId: 1, tagId: 10 },
      { eventId: 1, tagId: 5 },
      { eventId: 3, tagId: 3 },
      { eventId: 5, tagId: 4 },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('EventTags', null, {});

  }
};
