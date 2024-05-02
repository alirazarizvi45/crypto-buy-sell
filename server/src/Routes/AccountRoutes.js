const express = require("express");
const { registerController } = require("../Controllers/registerController");
const { loginController } = require("../Controllers/loginController");
const router = express.Router();

router.post("/Register", registerController);
router.post("/Login", loginController);

module.exports = router;
