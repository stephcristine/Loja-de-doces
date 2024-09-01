class Produto {
  constructor(db) {
    this.db = db;
  }

  getProdutos() {
    const SQL = "SELECT * FROM produto";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, (err, result) => {
        if (err) {
          reject("Erro ao buscar produtos");
          console.log("Erro ao buscar produtos no banco", err);
        } else {
          resolve(result);
          console.log("Produtos encontrados");
        }
      });
    });
  }
}

module.exports = Produto;
