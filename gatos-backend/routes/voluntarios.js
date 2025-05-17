const express = require('express');
const router = express.Router();
const Voluntario = require('../models/Voluntarios');

// POST voluntário
router.post('/', async (req, res) => {
  try {
    const novoVoluntario = new Voluntario(req.body);
    await novoVoluntario.save();
    res.status(201).json(novoVoluntario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
