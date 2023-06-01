const express = require("express");
const loginController = require("../controller/login_controller")

const router = express.Router();

//api/login
router.post('/',  loginController.autenticar)

module.exports = router;
