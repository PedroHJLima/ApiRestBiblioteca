const { Router } = require("express");
const editoraController = require("../controller/editoraController.js");

const router = Router();

router.get("/",editoraController.getEditoras);
router.post("/",editoraController.postEditora);
router.put("/",editoraController.putEditora);
router.delete("/:id",editoraController.deleteEditora);

module.exports = router;