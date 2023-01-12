const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

router.get("/", auth, postCtrl.getPubli);
router.post("/add", postCtrl.createPubli);
router.put("/update/",  postCtrl.updatePubli);
router.delete("/delete/", auth, postCtrl.deletePubli);


module.exports = router;