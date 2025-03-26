const express = require('express');
const {saveContact} = require("../controllers/contactController");


const router = express.Router();


router.post("/save-contact", saveContact);

module.exports = router;