const express = require("express");
const CategoriaController = require("../controller/CategoriaController");

const router = express.Router();

router.get("/", CategoriaController.getCategoria.bind(CategoriaController));

module.exports = router;