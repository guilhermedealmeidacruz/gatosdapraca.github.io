const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importando as rotas
const gatosRouter = require('./gatos-backend/routes/gatos');
const contatosRouter = require('./gatos-backend/routes/contatos');
const voluntariosRouter = require('./gatos-backend/routes/voluntarios');
const adocoesRouter = require('./gatos-backend/routes/adocoes');

// Usando as rotas
app.use('/api/gatos', gatosRouter);
app.use('/api/contatos', contatosRouter);
app.use('/api/voluntarios', voluntariosRouter);
app.use('/api/adocoes', adocoesRouter);

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware para ler JSON no body das requisições
// app.use(express.json());

// // Habilitar CORS para todas as origens (pode configurar depois mais restrito)
// app.use(cors());

// // String de conexão com o MongoDB Atlas (substitua pela sua)
// const mongoURI = "mongodb+srv://rayanepereira547:eRKv61rKG35wna7m@cluster0.o8vo75a.mongodb.net/";

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB conectado com sucesso!'))
// .catch((error) => console.log('Erro ao conectar no MongoDB:', error));

// // Rotas exemplo
// app.get('/', (req, res) => {
//   res.send('API funcionando!');
// });

// // Start do servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });
