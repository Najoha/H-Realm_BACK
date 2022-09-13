const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/logout', auth, userCtrl.logout);
router.post('/welcome', auth, userCtrl.test);
router.get("/",  userCtrl.getUser);

module.exports = router;

