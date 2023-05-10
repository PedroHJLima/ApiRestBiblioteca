const { Router } = require("express");
const livroController = require("../controller/livroController.js")


const router = Router();

router.get("/",livroController.getLivros);

module.exports = router;
