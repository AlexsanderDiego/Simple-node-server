//Usando EXPRESS
const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.json("Pagina Principal")
})

module.exports = router