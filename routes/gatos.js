const express = require('express');
const router = express.Router();

// Dados mockados de gatos
const gatos = [
  { id: 1, nome: 'Mingau', idade: 2, cor: 'branco', castrado: true },
  { id: 2, nome: 'Pretinho', idade: 3, cor: 'preto', castrado: false },
  { id: 3, nome: 'Luna', idade: 1, cor: 'cinza', castrado: true }
];

// GET - Lista de gatos
router.get('/', (req, res) => {
  res.json(gatos);
});

// GET - Um gato por ID
router.get('/:id', (req, res) => {
  const gato = gatos.find(g => g.id === parseInt(req.params.id));
  if (!gato) {
    return res.status(404).json({ mensagem: 'Gato não encontrado' });
  }
  res.json(gato);
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// // GET todos os gatos
// router.get('/', (req, res) => {
//   res.json({ mensagem: 'Lista de gatos' });
// });

// // GET gato específico
// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ mensagem: `Gato com ID ${id}` });
// });

// // POST novo gato
// router.post('/', (req, res) => {
//   res.json({ mensagem: 'Gato cadastrado!' });
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.json({ mensagem: 'Rota gatos funcionando!' });
// });

// module.exports = router;
