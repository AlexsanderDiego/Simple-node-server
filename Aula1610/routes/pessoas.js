const { pessoas } = require("../db");

//Usando EXPRESS
const express = require('express')
const app = express()
const router = express.Router()

//Usando EXPRESS
// GET /pessoas
router.get('/', (req, res) => {
  res.json(pessoas)
})

// GET /pessoas/id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const pessoa = pessoas.find(p => p.id == id);
  if (pessoa) {
    return res.json(pessoa);
  }
  res.status(404);
  res.json();
})

// GET /pessoas/id/endereço
router.get('/:id/endereco', (req, res) => {
  const id = req.params.id;
  const pessoa = pessoas.find(p => p.id == id);
  if (pessoa) {
    return res.json(pessoa.endereço);
  }
  res.status(404);
  res.json();
})

module.exports = router;
