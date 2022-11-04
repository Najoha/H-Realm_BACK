const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

router.get("/", postCtrl.getPubli);

router.post("/add", auth, postCtrl.createPubli);
router.put("/update/:id", auth, postCtrl.updatePubli);
router.delete("/delete/:id", auth, postCtrl.deletePubli);


module.exports = router;