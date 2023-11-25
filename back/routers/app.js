
const express = require('express');
const apir = require('./api.router');
const db = require('./db.router');

function appApi(app) {
  const router = express.Router();
  app.use('/GapsiECommerce', router);
  router.use('/Api', apir);
  router.use('/DB', db);
}
module.exports = appApi;

