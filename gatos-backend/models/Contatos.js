// models/Contato.js
const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  mensagem: { type: String, required: true },
  dataEnvio: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contato', ContatoSchema);
