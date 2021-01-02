'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [

      {
        title: "A Feminist's Guide to Botany: Online Botanical Painting Session",
        date: '2021-01-07 13:30:00',
        description: "Our blockbuster FEMINIST'S GUIDE TO BOTANY class is BACK online! Join us for this unique lecture and Botanical Painting session!About this Event: This lecture and all our classes are now 'pay what you can' so that we can reach those of you who are financially struggling during CV19.We suggest a donation of £8 but if you love our lectures and you would like to help support us with a little extra(as creatives, it has been very difficult for us to Join London Drawing Group as we step inside the magical world of BOTANY for a summer - term special exploring the history of the heroic women artists, explorers and scientists that helped forge the way that we see the world around us! This will truly be a totally unique class and we are very excited to get drawing with you all! YOU WILL NEED A variety of plants, flowers, leaves or dried flowers to work from! You don't need too many, just enough to make an interesting arrangement, but if you're really caught short, just one or two houseplants or whatever you can collect from outside will be absolutely fine.",
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102066008%2F185750211993%2F1%2Foriginal.20200528-112745?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=72%2C0%2C2052%2C1026&s=4c52ec219253507350d5cf11974e9ab2'
      },
      {
        title: 'The 2021 Financial Checklist',
        date: '2021-01-28 18:30:00',
        description: 'The Studio at TFD presents The 2021 Financial Checklist, a workshop to help you reach your financial goals in the new year. In this finance - forward, resolution- oriented workshop, Chelsea will pair with Lauren Anastasio, CFP® Financial Planner at SoFi, to run through the comprehensive checklist everyone needs to start their year off on a good note and finish strong, from budgeting to investing to income diversification.Rather than adopting a one - size - fits all mentality, this checklist would be adaptable to ones own goals and feature plenty of sub-goals to make sure each one can be reached within the calendar year.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F118301885%2F223901959787%2F1%2Foriginal.20201120-191744?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e676eb75b0028b2ee07022a9ee745229'
      },
      {
        title: 'Virtual Tour of Buckingham Palace',
        date: '2021-01-15 19:00:00',
        description: 'In 1703, this palace was constructed to be the home and HQ of the British Royalty. For the past several centuries, much history has taken place in the world, and while the royalty has attempted to adapt, the grace and glory of Buckingham palace remained the same.Our guide will take us on a virtual experience of the history and tour of Buckingham Palace.We will begin with a historical perspective on the creation of the palace and its place in the world since the 18th Century.We will then “go inside” and learn about the rooms and artwork located within its royal walls including the State Rooms(used for receiving guests and functions), the amazing grand staircase, the throne room, and many more.We will learn about some of the art within its walls, including those my Rembrandt, Canaletto and more! Note: All Zoom links to attend the tour will be sent 30 minutes before the event(to the email you register with).',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121715463%2F84203646226%2F1%2Foriginal.20201227-123226?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2828%2C1414&s=a1af39ba8943077a3861bae7657e3e66'
      },
      {
        title: 'Non-alcoholic Cocktail Masterclass with Aecorn & Seedlip',
        date: '2021-01-09 13:00:00',
        description: 'Want to start dry January in style? Seedlip and Æcorn are hosting a cocktail-making workshop with a twist. Whether you’re a new-to - this novice or tipple connoisseur, you’ll be shown how to make a number of classic cocktails such as Negroni, Cosnopolitan, Martino, French 0.5, all with an alcohol- free take.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121567391%2F118373259849%2F1%2Foriginal.20201223-140740?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C104%2C1306%2C653&s=2d3776a6b557e42bdeff309d8861d0d8'
      },
      {
        title: "Shakespeare's London 1564-1616: A Livestream History Tour",
        date: '2021-01-24 11:00:00',
        description: 'Join us for a fascinating online tour exploring the world and era of William Shakespeare (1564 - 1616) in London. It was an intriguing time both in the wider picture of Medieval England, but also in the personal and professional life of Shakespeare.Using high- quality images and engaging story - telling, I will be guiding you through how these different elements wove together, both zooming back and recreating medieval London, and also looking at and exploring the various surviving buildings and places from Shakespeares time; where he used to live, the churches he worshipped in, where he put on his plays and much more.I’ll also intersperse the tour with topical readings from Shakespeare’s writings.I’m looking forward to being your guide through this fascinating topic!',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121849417%2F37309396322%2F1%2Foriginal.20201229-173630?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C45%2C620%2C310&s=487c9cf6daa7620e58ed33a78b3e8be1'
      },
      {
        title: 'Light, Land, and Water',
        date: '2021-01-25 12:00:00',
        description: 'Light, Land, and Water: Native and non-Native Visions of New England. Museums in the United States like the Museum of Fine Arts, Boston have long represented the Anglo- American tradition of landscape painting.But what about artists who used different techniques to explore the natural world ? This lecture will attempt to honor diverse definitions of "landscape" by examining Wabanaki baskets and beadwork alongside canvases by New England painters such as Fitz Henry Lane and Martin Johnson Heade.It will raise questions about depictions(or embodiments) of natural resources, relationships between humans and the environment, and entanglements of Native and non - Native histories.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F116954693%2F149962066403%2F1%2Foriginal.20201106-095155?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C71%2C640%2C320&s=45f2c6d8642b13382a3d3ec20bdfddd0'
      },
      {
        title: 'Mental Health Conference 2021',
        date: '2021-01-23 11:00:00',
        description: 'Our 5th Annual Mental Health Conference will be happening on January 23-24, 2021 virtually via Zoom. This two-day event will be filled with informative workshops, caucus spaces, performances, panels, giveaways, and a resource fair.Information regarding our program and virtual conferencing will be posted here soon.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F118896685%2F254658001509%2F1%2Foriginal.20201128-035329?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C291%2C972%2C486&s=dd605fc0dabeb667476a7a8d474a04ff'
      },
      {
        title: 'Elvis Presley 86th Birthday: Livestream Music History Program',
        date: '2021-01-8 20:00:00',
        description: 'This is a musical history program where we will provide the historical context of various topics with an emphasis on pop culture (as opposed to music theory) including selected video recordings from various artists. The historical items will be provided via pictures and video so viewing the presentation on- screen is recommended, but you are also free to just listen to the music via audio - only.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121237043%2F37309396322%2F1%2Foriginal.20201218-041532?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C600%2C300&s=43e43355105fc31bdff6f233dd15493a'
      },



    ], {});


  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('Events', null, {});

  }
};
