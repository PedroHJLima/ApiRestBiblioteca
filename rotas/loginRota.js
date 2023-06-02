const express = require("express");
const loginController = require("../controller/loginController")

const router = express.Router();

//api/login
router.post('/',  loginController.autenticar)

module.exports = router;
