const { Router } = require("express");
const livroController = require("../controller/livroController.js")


const router = Router();

router.get("/",livroController.getLivros);
router.get("/:id",livroController.getLivrosById);
router.post("/",livroController.postLivros);
router.delete("/:id",livroController.deleteLivro);

module.exports = router;
