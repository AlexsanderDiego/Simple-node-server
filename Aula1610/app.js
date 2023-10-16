const express = require('express')
const app = express()
const carrosRouter = require('./routes/carros')
const pessoasRouter = require('./routes/pessoas')
const homeRouter = require('./routes/home')
const port = 3000

app.use(express.json())

// app.get('/', (req, res) => {
//   res.json('Hello World!')
// })

// Prefixo da rota de carros
app.use('/carros', carrosRouter);
app.use('/pessoas', pessoasRouter);

app.use('/', homeRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
