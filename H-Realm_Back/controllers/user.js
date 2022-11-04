const { find } = require("../models/user");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const jwt = require('jsonwebtoken');

require("../config/db").connect();
require("dotenv").config;


exports.signup = async (req, res) => {

  try {

    const {prenom, nom, age, bio, email, password} = req.body;

    if (!(email && password && prenom && nom )) {
        res.status(400).send('All input are required');
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
    console.error(err)
    throw err
  }
};

exports.login = async (req, res) => {

    try {
        TOKEN_KEY = 'RANDOM_TOKEN_SECRET'

        const { email, password } = req.body;

        if(!(email && password)) {
            res.status(400).send('All input is required');
        }

        const user = await User.findOne({email});

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                TOKEN_KEY,
                { expiresIn: "24h" },
            );

            user.token = token;

            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials")
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.test = async (req, res) => {
    return res.status(200).send("hello")
}

exports.logout = async (req, res) => {
    try {
        const { id } = req.body;

        await User.deleteOne({_id: id});

        return res.status(201).json('delete ok');
    }
    catch (err) {
        return res.status(501).json(error);
    }
}

exports.getUser = async (req,res,next)=>{
    const users = await User.find();
    return res.send(users);
}

exports.updateUser = async (req, res) => {
    try {

        const { prenom, nom, age, bio} = req.body;
    
        const user = await User.updateOne({
            prenom,
            nom,
            age,
            bio,
        });
    
        res.status(200).json(user);
    
      } catch (err){
        console.log(err);
      }
}

exports.deleteUser = async (req, res, next) => {
    const prenom = req.params.prenom;
    const users = await User.deleteOne({prenom: prenom});
    return res.send(users);
}