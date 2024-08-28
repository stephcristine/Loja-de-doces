const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "doces",
});

app.use(cors());
app.use(express.json());

app.post("/usuario", (req, res) => {
  const { nome, sobrenome, data_nasc, email, senha, cep } = req.body;

  const SQL = "INSERT INTO usuario (nome, sobrenome, data_nasc, email, senha, cep) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(SQL, [nome, sobrenome, data_nasc, email, senha, cep], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao cadastrar usuário");
    } else {
      res.status(200).send("Usuário cadastrado com sucesso");
    }
  });
});

app.get("/usuario", (req, res) => {
  const SQL = "SELECT * FROM usuario";
  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao buscar os usuários");
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
