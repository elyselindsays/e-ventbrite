'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [

      {
        title: "A FEMINIST'S GUIDE TO BOTANY: Online Botanical Painting Session",
        date: '2021-01-07 13:30:00',
        description: "Our blockbuster FEMINIST'S GUIDE TO BOTANY class is BACK online! Join us for this unique lecture and Botanical Painting session!About this Event: This lecture and all our classes are now 'pay what you can' so that we can reach those of you who are financially struggling during CV19.We suggest a donation of £8 but if you love our lectures and you would like to help support us with a little extra(as creatives, it has been very difficult for us to Join London Drawing Group as we step inside the magical world of BOTANY for a summer - term special exploring the history of the heroic women artists, explorers and scientists that helped forge the way that we see the world around us! This will truly be a totally unique class and we are very excited to get drawing with you all! YOU WILL NEED A variety of plants, flowers, leaves or dried flowers to work from! You don't need too many, just enough to make an interesting arrangement, but if you're really caught short, just one or two houseplants or whatever you can collect from outside will be absolutely fine.",
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102066008%2F185750211993%2F1%2Foriginal.20200528-112745?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=72%2C0%2C2052%2C1026&s=4c52ec219253507350d5cf11974e9ab2'
      },
      {
        title: 'K-Pop Party',
        date: '2020-12-31 14:00:00',
        description: 'come have fun',
        image: 'https://unsplash.com/photos/ZDN-G1xBWHY'
      },
      {
        title: 'K-Pop Party',
        date: '2020-12-31 14:00:00',
        description: 'come have fun',
        image: 'https://unsplash.com/photos/ZDN-G1xBWHY'
      },
      {
        title: 'K-Pop Party',
        date: '2020-12-31 14:00:00',
        description: 'come have fun',
        image: 'https://unsplash.com/photos/ZDN-G1xBWHY'
      },
      {
        title: 'Yoga Retreat Online',
        date: '2020-12-31 12:00:00',
        description: 'come have not as much fun',
        image: 'https://cdn.muenchen-p.de/.imaging/stk/responsive/image980/dms/va-2017/tollwood-2017/teaser/tollwood-2017-hp-01/document/tollwood-2017-hp-01.jpg'
      },
      {
        title: 'C-Pop Party',
        date: '2020-12-31 14:00:00',
        description: 'come have fun',
        image: 'https://unsplash.com/photos/ZDN-G1xBWHY'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('Events', null, {});

  }
};
