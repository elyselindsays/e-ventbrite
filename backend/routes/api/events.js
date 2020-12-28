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

}))






module.exports = router;