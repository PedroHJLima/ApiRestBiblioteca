const express = require("express");
const livroController = require("../controller/controller.js")


const router = express.Router();

router.get("/",livroController.getLivros);
