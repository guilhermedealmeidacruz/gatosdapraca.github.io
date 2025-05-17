const express = require('express');
const router = express.Router();
const Gato = require('../models/Gato');

// GET todos os gatos
router.get('/', async (req, res) => {
  try {
    const gatos = await Gato.find();
    res.json(gatos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
