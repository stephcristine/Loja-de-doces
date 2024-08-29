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

//Ver produtos
app.get("/produto", (req, res) => {
  const SQL = "SELECT * FROM produto";
  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao buscar os produtos");
    } else {
      res.json(result);
    }
  });
});

// Efetuar compra
app.post("/compra", (req, res) => {
  const { qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario} = req.body;

  console.log("Dados recebidos:", { qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario });

  const SQL = "INSERT INTO compra (qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario) VALUES (?, ?, ?, ?, ?)";
  db.query(SQL, [qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao cadastrar compra");
    } else {
      res.status(200).send("Compra cadastrada com sucesso");
    }
  });
});


app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
