const jwt = require("jsonwebtoken");
var app = require('express')();
TOKEN_KEY = 'RANDOM_TOKEN_SECRET'

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    console.log(bearerToken);

    if (!bearerToken) {
        return res.status(403).send('A token is required for authentication');
    }

    try {
        const decoded = jwt.verify(bearerToken, TOKEN_KEY);
        req.user = decoded;
    }
    catch (err){
        console.log(err)
        return res.status(401).send("Invalid Token")
    }
    return next();
};

// app.get('/user/login', checkToken,(req,res) => {

//     jwt.verify(req.token,'secretkey',(err,authData) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             res.json({
//                 message:"Yes t'es connecté bro !",
//                 userData:authData
//             })
            
//         }
//     })
// });

// function checkToken(req,res,next){
//     const bearerHeader = req.headers['Authorization'];

//     if (typeof bearerHeader !== 'undefined') {

//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();

//     } else {

//         res.sendStatus(403);

//     }
// }

module.exports = verifyToken;