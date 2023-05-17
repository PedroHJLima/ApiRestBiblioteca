const { Router } = require("express");
const autorController = require("../controller/autorController.js");
const { deleteEditora } = require("../controller/editoraController.js");

const router = Router();

router.get("/",autorController.getAutores);
router.post("/",autorController.postAutor);


module.exports = router;