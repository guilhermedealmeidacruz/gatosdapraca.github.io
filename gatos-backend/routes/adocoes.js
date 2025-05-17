const express = require('express');
const router = express.Router();
const Adocao = require('../models/Adocao');

// POST pedido de adoção
router.post('/', async (req, res) => {
  try {
    const novaAdocao = new Adocao(req.body);
    await novaAdocao.save();
    res.status(201).json(novaAdocao);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
