// models/Voluntario.js
const mongoose = require('mongoose');

const VoluntarioSchema = new mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  nomeSocial: { type: String },
  endereco: { type: String },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  sexo: { type: String, enum: ['Masculino', 'Feminino', 'Outros'], required: true },
  observacoes: { type: String },
  dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Voluntario', VoluntarioSchema);
