const express = require('express');
const router = express.Router();

// GET todas as adoções
router.get('/', (req, res) => {
  res.json({ mensagem: 'Lista de adoções' });
});

// GET adoção específica
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `Adoção com ID ${id}` });
});

// POST nova adoção
router.post('/', (req, res) => {
  res.json({ mensagem: 'Adoção registrada!' });
});

module.exports = router;
