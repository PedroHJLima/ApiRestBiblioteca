const { Router } = require("express");
const usuarioController = require("../controller/usuarioController.js")


const router = Router();

router.get("/",usuarioController.getUsuarios);
router.post("/",usuarioController.postUsuarios);
router.post("/retira",usuarioController.retiraLivro);
router.post("/devolve",usuarioController.devolveLivro);
router.put("/",usuarioController.postUsuarios);
router.get("/:id",usuarioController.buscarUsuarioMatricula);
router.delete("/:id",usuarioController.deleteUsuario);

module.exports = router;