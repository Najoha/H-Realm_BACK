const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

router.get("/", auth, postCtrl.getPubli);
router.get("/publication/:owner", auth, postCtrl.getPubliByOwner);
router.post("/add", auth, postCtrl.createPubli);

module.exports = router;