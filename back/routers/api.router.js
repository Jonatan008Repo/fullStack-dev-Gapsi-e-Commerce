const express = require('express');
const apir = express.Router();
apir.use(express.json());
apir.get('/home', (req, res) => {
  try {
    res.json({
      message: 'Bienvenido Candidato',
      numero: 1
    });
  } catch (error) {
    console.error("💢 | file: api.router.js| error:", error);
  }
});
apir.get('/ver', (req, res) => {
  try {
    res.send('0.0.1');
  } catch (error) {
    console.log("💢 | file: api.router.js: | error:", error);
  }
});

module.exports = apir;
