class Usuario{
  constructor(db) {
    this.db =db;
  }

  getUsuario(id) {
    const SQL = "SELECT * FROM usuario WHERE id_usuario = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [id], (err, result) => {
        if (err) {
          reject("Erro ao buscar o usuário");
          console.log("Erro ao buscar o usuário no banco", err);
        }
        else{
          resolve(result);
          console.log("Usuario encontrado");
        }
      });
    });
  }

  addUsuario(dados){
    const { nome, sobrenome, data_nasc, email, senha, cep } = dados;
    const SQL = "INSERT INTO usuario (nome, sobrenome, data_nasc, email, senha, cep) VALUES ( ?, ?, ?, ?, ?, ? )";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [nome, sobrenome, data_nasc, email, senha, cep], (err, result) => {
        if (err) {
          reject("Erro ao adicionar usuário");
          console.log("Usuário não adicionado:", err);
        }
        else{
          resolve("Usuário adicionado com sucesso");
          console.log("Usuario adicionado com sucesso!");
        }
      });
    });

  }

  editUsuario(dados, id) {
    const { nome, sobrenome, data_nasc, email, senha, cep } = dados;
    const SQL = "UPDATE usuario SET nome = ?, sobrenome = ?, data_nasc = ?, email = ?, senha = ?, cep = ? WHERE id_usuario = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [nome, sobrenome, data_nasc, email, senha, cep, id], (err, result) => {
        if (err) {
          reject("Erro ao atualizar usuário");
          console.log("Erro ao atualizar usuário:", err);
        } else {
          resolve("Usuário atualizado com sucesso");
          console.log("Usuário atualizado com sucesso!");
        }
      });
    });
  }

  deleteUsuario(id){
    const SQL = "DELETE FROM usuario WHERE id_usuario = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [id], (err, result) => {
        if (err) {
          reject("Erro ao deletar usuário");
        }
        else if (result.affectedRows === 0) {
          reject("Usuário não encontrado");
        }
        else{
          resolve("Usuário deletado com sucesso");
        }
      });
    });
  }

  async login(email, senha) {
    const SQL = "SELECT * FROM usuario WHERE email = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [email], (err, result) => {
        if (err) {
          console.error("Erro ao buscar o usuário no banco:", err);
          reject("Erro ao buscar o usuário");
        } else if (result.length === 0) {
          console.log("Usuário não encontrado");
          reject("Usuário não encontrado");
        } else {
          const usuario = result[0];
          console.log("Usuário encontrado, verificando senha...");
          if (usuario.senha === senha) {  // Verifica se a senha corresponde
            console.log("Senha correta");
            resolve(usuario);
          } else {
            console.log("Senha incorreta");
            reject("Senha incorreta");
          }
        }
      });
    });
  }

}

module.exports = Usuario;