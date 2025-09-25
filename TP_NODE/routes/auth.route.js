const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const checkUser = require("../middleware/checkUser.middleware");

router.post("/register", userController.signin);
router.post("/login", userController.login);

module.exports = router;
