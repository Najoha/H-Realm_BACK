const express = require('express');
const router = express.Router();

require("dotenv").config();

const auth = require('../middleware/auth');


router.post('/welcome', auth, (req, res) => {
    res.status(200).send("Welcome");
})

module.exports = router;