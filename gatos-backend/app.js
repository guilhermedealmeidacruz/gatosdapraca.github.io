const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');  // caminho para o arquivo acima

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro no MongoDB:', err));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
