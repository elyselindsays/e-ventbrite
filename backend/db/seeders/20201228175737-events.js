'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [
      {
        title: 'K-Pop Party',
        date: '2020-12-31 14:00:00',
        description: 'come have fun',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shethepeople.tv%2Fhome-top-video%2Fsexual-dolls-female-kpop-industry-sexualises-singers%2F&psig=AOvVaw3hE71nzxYDvg50P_xTSOL7&ust=1609265029986000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCAqsqh8e0CFQAAAAAdAAAAABAD'


      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('Events', null, {});

  }
};
