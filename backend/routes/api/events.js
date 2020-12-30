const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Event } = require('../../db/models');
const { db } = require('../../config');
const router = express.Router();



router.get(`/`, asyncHandler(async (req, res) => {

  const events = await Event.findAll();

  res.json(events);

}));


// router.get(`/:id`, asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const event = await Event.findOne({
//     where: {
//       id: id
//     }
//   });
//   res.json(event);
// }))






module.exports = router;