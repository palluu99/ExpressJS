const express = require('express');
const {saveRegister} = require("../controllers/registerController");

const router = express.Router();

router.post("/save-register", saveRegister);

module.exports= router;