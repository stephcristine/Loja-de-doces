const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const compraRoutes = require("./routes/compraRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuario", usuarioRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/produto", produtoRoutes);
app.use("/compra", compraRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
