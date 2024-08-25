import {db} from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO usuario (nome, sobrenome, data_nasc, email, senha, cep) VALUES (?)";

  console.log(req.body);
  const values = [
    req.body.nome,
    req.body.sobrenome,
    req.body.data_nasc,
    req.body.email,
    req.body.senha,
    req.body.cep
  ];

  db.query(q, [values], (err) => {
    console.log("Erro no MySQL:", err);
    if(err) return res.json(err);

    console.log("Resultado da inserção:", result);
    return res.status(200).json("Usuário cadastrado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q = "UPDATE usuario SET 'nome' = ?, 'sobrenome' = ?, 'data_nasc' = ?, 'email' = ?, 'senha' = ?, 'cep' = ? WHERE 'id_usuario' = ?";

  const values = [
    req.body.nome,
    req.body.sobrenome,
    req.body.data_nasc,
    req.body.email,
    req.body.senha,
    req.body.cep,
  ];

  db.query(q, [...values, req.params.id_usuario], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Usuário editado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuario WHERE 'id_usuario' = ? ";

  db.query(q, [req.params.id_usuario], (err) => {
    if(err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};