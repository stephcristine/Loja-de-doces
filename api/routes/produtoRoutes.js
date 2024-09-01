const express = require("express");
const ProdutoController = require("../controller/ProdutoController");


const router = express.Router();

router.get("/", ProdutoController.getProdutos.bind(ProdutoController));


module.exports = router;