const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Event, Ticket } = require('../../db/models');
const { db } = require('../../config');
const router = express.Router();


/******** /api/events *******/
router.get(`/`, asyncHandler(async (req, res) => {
  {
    const events = await Event.findAll();
    res.json(events);
  }
}));


router.post(`/register`, asyncHandler(async (req, res) => {

  const { eventId, userId } = req.body;
  const ticket = await Ticket.create({
    eventId,
    userId
  })

  res.json(ticket);
}));

router.post(`/like`, asyncHandler(async (req, res) => {

  const { eventId, userId, bookmark } = req.body;
  const ticket = await Ticket.create({
    eventId,
    userId,
    bookmark: true
  })

  res.json(ticket);
}));

router.post('/create', asyncHandler(async (req, res) => {
  const event = await Event.create({
    title, date, description
  });
  res.json(event)
}))


router.get(`/my-tickets`, requireAuth, asyncHandler(async (req, res) => {

  const { user } = req;

  if (user) {

    const tickets = await Ticket.findAll({

      where: {
        userId: user.id
      },

      include: [{
        model: Event,

      }]
    });
    res.json(tickets);

  } else return res.json({});

}));


module.exports = router;