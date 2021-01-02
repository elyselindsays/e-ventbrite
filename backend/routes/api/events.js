const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Event, Ticket } = require('../../db/models');
const { db } = require('../../config');
const router = express.Router();



router.get(`/`, asyncHandler(async (req, res) => {
  {
    const events = await Event.findAll();
    res.json(events);
  }
}));


router.post(`/register`, asyncHandler(async (req, res) => {
  console.log(req.body);
  const { eventId, userId } = req.body;
  const ticket = await Ticket.create({
    eventId,
    userId
  })

  res.json(ticket);
}));



router.get(`/my-tickets`, asyncHandler(async (req, res) => {

  //PERSON MYST BE LOGGED IN TO USE REQ.USER
  // REQUIRE AUTH MIDDLEWARE+

  const user = req.session.user
  console.log(user)
  // const tickets = await Ticket.findAll({

  //   include: [{
  //     model: Event,
  //     where: {
  //       userId: user.id
  //     }
  //   }]
  // });
  // console.log(tickets)
  // res.json(tickets);

}));


module.exports = router;