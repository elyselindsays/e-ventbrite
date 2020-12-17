const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);


// test route setting a cookie on the response with the name XSRF-TOKEN 
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;