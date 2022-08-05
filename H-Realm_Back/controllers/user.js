const { find } = require("../models/user");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const jwt = require('jsonwebtoken');

require("../config/db").connect();
require("dotenv").config();


exports.signup = async (req, res) => {

  try {

    const { prenom, nom, age, bio, email, password} = req.body;

    if (!(email && password && prenom && nom && age && bio)) {
        res.status(400).send('All input is required');
    };

    const oldUser = await User.findOne({ email });

    if (oldUser) {
        return res.status(409).send('User Already Exist. Please Login')
    };

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        prenom,
        nom,
        age,
        bio,
        email: email.toLowerCase(),
        password: encryptedPassword
    });

    res.status(200).json(user);

  } catch (err){
    console.log(err);
  }
};

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if(!(email && password)) {
            res.status(400).send('All input is required');
        }

        const user = await User.findOne({email});

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "24h" }
            );

            user.token = token;

            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials")
    }
    catch (err){
        console.log(err)
    }
};

exports.test = async (req, res) => {
    return res.status(200).send("hello")
}

    