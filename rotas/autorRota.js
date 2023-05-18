const { Router } = require("express");
const autorController = require("../controller/autorController.js");

const router = Router();

router.get("/",autorController.getAutores);
router.get("/:id",autorController.buscaAutorById);
router.post("/",autorController.postAutor);
router.delete("/",autorController.deleteAutor);


module.exports = router;