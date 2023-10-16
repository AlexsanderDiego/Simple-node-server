const http = require("http");
const db = require("./db");
const carros = db.carros;
const pessoas = db.pessoas;
const { getPessoa, getPessoas, getEndereco } = require('./routes/pessoas')
const { getCarro, getCarros } = require('./routes/carros');
const home = require("./routes/home");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/json");

  if (req.method === "GET") {
    if (req.url === "/pessoas") {
      return getPessoas(req, res);
    }

    if (req.url.match(/\/pessoas\/[0-9]+$/)) {
      return getPessoa(req, res);
    }

    if (req.url.match(/\/pessoas\/[0-9]+\/endereco$/)) {
      return getEndereco(req, res);
    }

    if (req.url === "/carros") {
      return getCarros(req, res);
    }

    if (req.url.match(/\/carros\/[0-9]+/)) {
      return getCarro(req, res);
    }

    if (req.url === "/") {
      return home(req, res)
    }

    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
