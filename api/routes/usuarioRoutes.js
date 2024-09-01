const express = require("express");
const UsuarioController = require("../controller/UsuarioController");

const router = express.Router();

router.get("/:id", UsuarioController.getUsuarios.bind(UsuarioController));
router.post("/", UsuarioController.addUsuario.bind(UsuarioController));
router.delete("/:id", UsuarioController.deleteUsuario.bind(UsuarioController));
router.put("/:id", UsuarioController.editUsuario.bind(UsuarioController));
router.post("/login", UsuarioController.login.bind(UsuarioController));

module.exports = router;