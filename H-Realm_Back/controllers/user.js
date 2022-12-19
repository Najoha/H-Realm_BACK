const { find } = require("../models/user");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const jwt = require('jsonwebtoken');

require("../config/db").connect();
require("dotenv").config;


exports.signup = async (req, res) => {
  try {
    const {username, prenom, nom, age, bio, email, password} = req.body;

    if (!(username && email && password && prenom && nom )) {
        res.status(400).send('All input are required');
    };

    const oldUser = await User.findOne({ email });

    if (oldUser) {
        return res.status(409).send('This Email address is already used.')
    };

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        prenom,
        nom,
        age,
        bio,
        email: email,
        password: encryptedPassword
    });

    res.status(200).json("User have been created : "+ req.body.username);
    

  } catch (err){
    console.error(err)
    throw err
  }
};

exports.login = async (req, res) => {

    try {
        TOKEN_KEY = 'RANDOM_TOKEN_SECRET'

        const { username, password } = req.body;

        if(!(username && password)) {
            res.status(400).send('All input are required');
        }

        const user = await User.findOne({username}, "username password ");

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, username },
                TOKEN_KEY,
                { expiresIn: '24h' },
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
    const datas = await User.find({},"username bio");
    return res.send(datas);
}

exports.updateUser = async (req, res) => {
    try {

        const { username,prenom, nom, age, bio} = req.body;
    
        const user = await User.updateOne({
            username,
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

