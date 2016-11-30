const express = require('express');
const router = express.Router();

const logIn = require('./handlers/logIn');
const singUp = require('./handlers/signUp');

router.post("/auth/login", logIn)
router.post("/auth/signup",singUp)

module.exports = router;