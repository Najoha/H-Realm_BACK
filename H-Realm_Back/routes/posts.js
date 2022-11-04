const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

router.get("/", postCtrl.getPubli);
router.get("/publication/:owner", auth, postCtrl.getPubliByOwner);
router.post("/add", auth, postCtrl.createPubli);
router.put("/update/:id", auth, postCtrl.updatePubli);
router.get("/publication/:id", auth, postCtrl.getPubliById);
router.delete("/delete/:id", auth, postCtrl.deletePubli);

module.exports = router;