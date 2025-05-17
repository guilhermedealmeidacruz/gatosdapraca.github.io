const mongoose = require('mongoose');

const gatoSchema = new mongoose.Schema({
  nome: String,
  sexo: String,
  descricao: String,
  idade: String,
  status: String,
  imagem: String
});

module.exports = mongoose.model('Gato', gatoSchema);
