const { Router } = require("express");
const usuarioController = require("../controller/usuarioController.js")


const router = Router();

router.get("/",usuarioController.getUsuarios);
router.post("/",usuarioController.postUsuarios);

module.exports = router;