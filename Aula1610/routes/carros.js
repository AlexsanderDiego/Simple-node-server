const { carros } = require("../db");

//Usando EXPRESS
const express = require('express')
const app = express()
const router = express.Router()

//Usando EXPRESS
// GET /carros
router.get('/', (req, res) => {
  res.json(carros);
})

// GET /carros/id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const carro = carros.find(p => p.id == id);
  if (carro) {
    return res.json(carro);
  }
  res.status(404);
  res.json();
})

module.exports = router
