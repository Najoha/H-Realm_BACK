const { find } = require("../models/user");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
  try {
    const newUser = req.body;
    const hash = await bcrypt.hash(req.body.password, 10);
    newUser["password"] = hash
    const user = User.create(newUser)
    return res.send(user) 
  } catch (error) {
    console.error(error)
    throw error
  }
};

// let log = "";

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
      } else {
        bcrypt.compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
            } else {
                console.log(log);
                res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn: '24h'}
                )
              });
              console.log("connection success")
            }
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
    }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.token = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then((user) => {
        if (user === null) {
            res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
        } else {
            tok = user.id(1)
            console.log(tok);
        }
    })
    .catch((error) => {
        res.status(500).json({ error });
    })
}

    