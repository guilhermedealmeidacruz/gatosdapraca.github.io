const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Importando rotas
const gatosRouter = require('./routes/gatos');
const contatosRouter = require('./routes/contatos');
const adocoesRouter = require('./routes/adocoes');
const voluntariosRouter = require('./routes/voluntarios');

// Usando as rotas
app.use('/api/gatos', gatosRouter);
app.use('/api/contatos', contatosRouter);
app.use('/api/adocoes', adocoesRouter);
app.use('/api/voluntarios', voluntariosRouter);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API dos Gatos da Praça!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});




// // server.js
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // Middleware para interpretar JSON no corpo das requisições
// app.use(express.json());

// // Importa as rotas
// const gatosRouter = require('./routes/gatos');
// const contatosRouter = require('./routes/contatos');

// // Usa as rotas no app
// app.use('/gatos', gatosRouter);
// app.use('/contatos', contatosRouter);

// // Conecta ao MongoDB usando a URI do .env
// const mongoURI = process.env.MONGO_URI;

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('Conectado ao MongoDB');
// })
// .catch((err) => {
//   console.error('Erro ao conectar ao MongoDB:', err);
// });

// // Define a porta do servidor
// const PORT = process.env.PORT || 3000;

// // Inicia o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });



// require('dotenv').config();
// const express = require('express');
// const app = express();

// // Importa as rotas
// const gatosRouter = require('./routes/gatos');

// // Usa as rotas
// app.use('/gatos', gatosRouter);

// // Rota raiz para teste simples
// app.get('/', (req, res) => {
//   res.send('Backend rodando OK!');
// });

// // Porta do servidor (vinda do .env ou padrão 3000)
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });





// server.js

// // Carrega variáveis do arquivo .env
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // Middleware para interpretar JSON no corpo das requisições
// app.use(express.json());

// // Importa as rotas (supondo que você tenha um arquivo routes/gatos.js)
// const gatosRouter = require('./routes/gatos');
// app.use('/api/gatos', gatosRouter);

// // Porta do servidor
// const PORT = process.env.PORT || 3000;

// // Pega a URI do MongoDB do .env
// const mongoURI = process.env.MONGO_URI;

// // Conecta ao MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Conectado ao MongoDB');

//   // Inicia o servidor após conectar ao banco
//   app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
//   });
// })
// .catch(err => {
//   console.error('Erro ao conectar ao MongoDB:', err);
// });


// const mongoose = require('mongoose');

// const mongoURI = process.env.MONGO_URI;

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Conectado ao MongoDB'))
// .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Importando as rotas
// const gatosRouter = require('./gatos-backend/routes/gatos');
// const contatosRouter = require('./gatos-backend/routes/contatos');
// const voluntariosRouter = require('./gatos-backend/routes/voluntarios');
// const adocoesRouter = require('./gatos-backend/routes/adocoes');

// // Usando as rotas
// app.use('/api/gatos', gatosRouter);
// app.use('/api/contatos', contatosRouter);
// app.use('/api/voluntarios', voluntariosRouter);
// app.use('/api/adocoes', adocoesRouter);

// // Conexão com o MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Conectado ao MongoDB'))
// .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


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
