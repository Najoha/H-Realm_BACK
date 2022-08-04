const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.get("/", postCtrl.getPubli);
router.get("/publication/:owner", postCtrl.getPubliByOwner);
router.post("/add", postCtrl.createPubli);

module.exports = router;