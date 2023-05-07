const { Router } = require("express");
const livroController = require("../controller/controller.js")


const router = Router();

router.get("/",livroController.getLivros);

module.exports = router;
