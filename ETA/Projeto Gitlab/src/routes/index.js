// src/routes/index.js
const express = require('express');
const router = express.Router();

// Definindo a rota GET
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Exporta o roteador
module.exports = router;
