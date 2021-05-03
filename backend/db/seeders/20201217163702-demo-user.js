'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        username: 'demo',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'FakeUser1',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        username: 'FakeUser2',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo', 'FakeUser1', 'FakeUser2'] }
    }, {});

  }
};
