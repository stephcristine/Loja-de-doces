class Categoria{
  constructor(db) {
    this.db =db;
  }

  getCategoria() {
    const SQL = "SELECT * FROM categoria_produto";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, (err, result) => {
        if (err) {
          reject("Erro ao buscar categoria");
          console.log("Erro ao buscar categorias no banco", err);
        } else {
          resolve(result);
          console.log("Categorias encontrados");
        }
      });
    });
  }
}

module.exports = Categoria;