const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

const essai = function(res, req, next) {
    console.log('success')
}

router.get('/essai', essai)

module.exports = router;

