// models/Adocao.js
const mongoose = require('mongoose');

const AdocaoSchema = new mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  endereco: { type: String, required: true },
  idade: { type: Number, required: true },
  gatoDesejado: { type: String, required: true }, // Pode ser o nome ou id do gato
  dataSolicitacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adocao', AdocaoSchema);
