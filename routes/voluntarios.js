const express = require('express');
const router = express.Router();

const voluntarios = [
  { id: 1, nome: 'Rayane', email: 'rayane@email.com' },
  { id: 2, nome: 'Lucas', email: 'lucas@email.com' }
];

// GET
router.get('/', (req, res) => {
  res.json(voluntarios);
});

// POST (simulado, sem salvar de verdade)
router.post('/', (req, res) => {
  const novoVoluntario = req.body;
  voluntarios.push({ id: voluntarios.length + 1, ...novoVoluntario });
  res.status(201).json({ mensagem: 'Voluntário cadastrado!', voluntario: novoVoluntario });
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// // Rota GET para listar todos os voluntários
// router.get('/', (req, res) => {
//   res.json({ mensagem: 'Lista de voluntários' });
// });

// // Rota GET para buscar um voluntário específico pelo ID
// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ mensagem: `Voluntário com ID ${id}` });
// });

// // Rota POST para cadastrar um voluntário
// router.post('/', (req, res) => {
//   res.json({ mensagem: 'Voluntário cadastrado!' });
// });

// module.exports = router;
