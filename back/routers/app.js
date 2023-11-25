
const express = require('express');
const apir = require('./api.router');

function appApi(app) {
  const router = express.Router();
  app.use('/GapsiECommerce', router);
  router.use('/Api', apir);
}
module.exports = appApi;

