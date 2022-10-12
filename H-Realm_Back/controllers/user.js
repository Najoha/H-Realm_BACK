import bcrypt from "bcrypt";
 import jwt from "jsonwebtoken";

import {User} from "../models/user.js";

export const add  = async (req, res, next) => {
  try {
    const newUser = req.body;
    if(!newUser || ! newUser.password) return res.send(400);
    
    const hash = await bcrypt.hash(newUser.password, 10);
    newUser["password"] = hash
    const user = User.create(newUser)
    return res.send("Votre compte a été créé avec succès.") 
  } catch (error) {
    console.error(error)
    throw error
  }
};


export const login = async (req, res, next) => {
  const {email,password} = req.body
  if(!email || password) return res.send(400);
  const user = User.findOne({email:req.body.email})
  if(!user) return res.send(404)
  const valid = await bcrypt.compare(password,user.password) 
  if(!valid) return res.send(401)

  return res.send({user,token:jwt.sign({userId:user._id},"RANDOM_TOKEN_SECRET",{expiresIn:"24h"})})
};

export const token = (req, res, next) => {
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

export const getUsers = async (req,res,next)=>{
  const users = await User.find();
  return res.send(users);
}

    