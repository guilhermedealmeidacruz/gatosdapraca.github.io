const express = require('express');
const router = express.Router();
const Contato = require('../models/Contatos');

// POST contato
router.post('/', async (req, res) => {
  try {
    const novoContato = new Contato(req.body);
    await novoContato.save();
    res.status(201).json(novoContato);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
