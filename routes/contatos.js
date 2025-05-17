const express = require('express');
const router = express.Router();

// GET todos os contatos
router.get('/', (req, res) => {
  res.json({ mensagem: 'Lista de contatos' });
});

// GET contato específico
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Contato com ID ${id}` });
});

// POST novo contato
router.post('/', (req, res) => {
  res.json({ mensagem: 'Contato enviado!' });
});

module.exports = router;

