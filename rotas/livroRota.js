const { Router } = require("express");
const livroController = require("../controller/livroController.js")


const router = Router();

router.get("/",livroController.getLivros);
router.get("/disonivel",livroController.getLivrosByDisponivel);
router.get("/:id",livroController.getLivrosById);
router.get("/autor/:id",livroController.getLivrosByAuthor);
router.post("/",livroController.postLivros);
router.delete("/:id",livroController.deleteLivro);

module.exports = router;
