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
      {
        title: 'Cultivate Compassion in the Wake of Anti-Asian Violence',
        date: '2021-04-18 20:00:00',
        description: 'Focusing on health justice, three acupuncturists explore anti-Asian policies, micro- and macro-aggressions, and systematic racism in academic institutions, professional organizations, and the health and wellness space.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129643509%2F438776807040%2F1%2Foriginal.20210319-183735?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=5da34f39a1690251c1dbaef7ba7daf05'
      },
      {
        title: 'Poetry & the Creative Mind — Virtual Gala Supporting National Poetry Month',
        date: '2021-01-9 16:00:00',
        description: "Each year during National Poetry Month, now in its 25th year, the Academy of American Poets presents a gala celebration of poetry's important place in our culture, and its impact on the lives of readers and artists working in other disciplines. For the first time, in 2021, Poetry & the Creative Mind will be presented free and virtually.",
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124469125%2F27518352441%2F1%2Foriginal.20210128-174018?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=8c304468ffbc6af43b932fecc2c548fe'
      },
      {
        title: 'The TFD Spring Refresh',
        date: '2021-03-8 12:00:00',
        description: 'For this ultimate spring cleaning season, TFD is bringing you a half-day crash course in revamping each element of your life to be organized, streamlined, and stress-free. From your home to your wardrobe to your kitchen, you deserve to live a life that is thoughtful and intentional, while getting rid of the clutter that drags you down.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124247053%2F223901959787%2F1%2Foriginal.20210126-194102?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1e00e9d3df6da3e1610bb78839fc23f9'
      },
      {
        title: 'The 2nd Annual National Antiracist Book Festival',
        date: '2021-01-10 10:00:00',
        description: 'On Saturday, April 24, 2021, Boston University’s Center for Antiracist Research will host the 2nd Annual National Antiracist Book Festival. This event will be held virtually to protect the safety of our community.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F97318832%2F244126536710%2F1%2Foriginal.20200325-143452?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C278%2C1080%2C540&s=ebefadaa61fd264858900c84e7e76b11'
      },
      {
        title: 'National Geographic Traveller: The Masterclasses online',
        date: '2021-01-6 10:00:00',
        description: 'For one-hour a day, over three days, the National Geographic Traveller team will provide a series of stimulating workshops and lectures that illuminate the art of written and visual storytelling. Not only will these in-depth courses be led by the magazine’s senior editors, renowned contributors and brand ambassadors they will also bring together published photographers and expert art directors.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F127108921%2F164866257512%2F1%2Foriginal.20210224-164223?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=0a248047dc9079be1de56b624849b2c1'
      },
      {
        title: 'Teacher Tech Summit',
        date: '2021-01-17 08:00:00',
        description: 'The global pandemic has demonstrated the need for schools to adopt and adapt new practices to ensure our children continue to receive a high-quality education.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F123385025%2F504027225927%2F1%2Foriginal.20210117-173319?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=62009fb849d16e63d4505b7e470350a2'
      },
      {
        title: 'John Waters - in Conversation - Live Zoom Talk',
        date: '2021-01-18 15:00:00',
        description: 'Legendary Film Director, Artist & Author in Conversation, by zoom, with Viktor Wynd',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F127109957%2F178030319390%2F1%2Foriginal.20210224-165051?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C130%2C6720%2C3360&s=3156d07c7540144c7cafbc1075fd8392'
      },
      {
        title: 'Health and Happiness Workshop',
        date: '2021-01-19 13:00:00',
        description: 'The pandemic environment, personal problems and work pressure take a toll on our body and mind. The Art of Living brings you this free holistic and integrated workshop called the Health and Happiness which provide unique tools and techniques which help combat stress accumulated in our daily, modern life.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F113007895%2F464627700405%2F1%2Foriginal.20200929-132616?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C115%2C1274%2C637&s=565e2e572e9e5c65f03421ff9cb75bb8'
      },
      {
        title: 'Inaugural David Cooper Lecture | Dr Anthony S. Fauci',
        date: '2021-01-14 10:00:00',
        description: 'As the world struggles to emerge from the COVID-19 pandemic, Dr Anthony S. Fauci sits down with Tegan Taylor, co-host of the ABC’s Coronacast, to discuss the past, the present and the future - from what we learned from the HIV/AIDS epidemic to what the ongoing impact of COVID-19 will be.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129588697%2F243879337343%2F1%2Foriginal.20210319-094613?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=333cce4f4ae0f5465224efc5d3bec00e'
      },
      {
        title: 'Baking from Scratch 101',
        date: '2021-01-6 15:00:00',
        description: "Formerly known as Puff Pastry 101, we've shifted to include fun baking projects of all kinds! Bring a friend and join us on Instagram Live!",
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b'
      },
      {
        title: 'Gentle Yoga for Terrible Times',
        date: '2021-01-10 21:00:00',
        description: 'Human beings are not meant to be in constant fight or flight mode. Chronic stress takes a devastating toll on our mental and physical well-being. If you are exhausted, stressed out, burnt out, or just looking to relax and nourish your mind, body, and spirit, please join me for an hour of gentle yoga.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102422544%2F11448527615%2F1%2Foriginal.20200602-034626?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1130%2C3024%2C1512&s=2047b5ac763391ccc7b83a80cbe3e7a8'
      },
      {
        title: "The Antidote: Women's Circle",
        date: '2021-01-8 20:00:00',
        description: 'The Antidote: Women’s Circle is a virtual event that uses meditation and reflection to help women gracefully navigate today’s world.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128817393%2F4115290788%2F1%2Foriginal.20210312-002028?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=4e67085c98acdc63a7d8c4180251177c'
      },
      {
        title: 'Elvis Presley 86th Birthday: Livestream Music History Program',
        date: '2021-01-8 20:00:00',
        description: 'This is a musical history program where we will provide the historical context of various topics with an emphasis on pop culture (as opposed to music theory) including selected video recordings from various artists. The historical items will be provided via pictures and video so viewing the presentation on- screen is recommended, but you are also free to just listen to the music via audio - only.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121237043%2F37309396322%2F1%2Foriginal.20201218-041532?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C600%2C300&s=43e43355105fc31bdff6f233dd15493a'
      },
      {
        title: 'Elvis Presley 86th Birthday: Livestream Music History Program',
        date: '2021-01-8 20:00:00',
        description: 'This is a musical history program where we will provide the historical context of various topics with an emphasis on pop culture (as opposed to music theory) including selected video recordings from various artists. The historical items will be provided via pictures and video so viewing the presentation on- screen is recommended, but you are also free to just listen to the music via audio - only.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121237043%2F37309396322%2F1%2Foriginal.20201218-041532?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C600%2C300&s=43e43355105fc31bdff6f233dd15493a'
      },
      {
        title: 'Elvis Presley 86th Birthday: Livestream Music History Program',
        date: '2021-01-8 20:00:00',
        description: 'This is a musical history program where we will provide the historical context of various topics with an emphasis on pop culture (as opposed to music theory) including selected video recordings from various artists. The historical items will be provided via pictures and video so viewing the presentation on- screen is recommended, but you are also free to just listen to the music via audio - only.',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121237043%2F37309396322%2F1%2Foriginal.20201218-041532?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C58%2C600%2C300&s=43e43355105fc31bdff6f233dd15493a'
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
