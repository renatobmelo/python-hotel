// src/app.js
const express = require('express');
const app = express();
const port = 3000;

// Importa as rotas
const indexRoutes = require('./routes/index');

// Define a rota principal
app.use('/', indexRoutes);

// Exporte o app sem iniciar o servidor (para testes)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;  // Exporte o app para testes
