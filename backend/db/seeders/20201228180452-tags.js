'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tags', [
      { type: 'Business' },
      { type: 'Food & Drink' },
      { type: 'Health' },
      { type: 'Music' },
      { type: 'Education' },
      { type: 'Hobbies' },
      { type: 'Fashion' },
      { type: 'Holiday' },
      { type: 'Science & Tech' },
      { type: 'Visual Arts' },
      { type: 'Entertainment' },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tags', null, {});

  }
};
