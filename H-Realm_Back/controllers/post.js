const { default: mongoose } = require("mongoose");
const { find } = require("../models/posts");
const { Post } = require("../models/posts");

exports.createPubli = async (req, res, next) => {

  try {

    const {titre, contenu, owner, genre} = req.body;
    if (!(titre && contenu && genre && owner)) {
      res.status(400).send('All input are required');
    }
    console.log(titre )
    const post = await Post.create({
      titre,
      contenu,
      genre,
      owner
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.getPubli = async (req,res,next)=>{
  
  try {
    const query = req.query
    console.log(req.user)
    const posts = await Post.find(query);
    return res.send(posts);
  } catch (error) {
    console.error(error);
    next(error)
  }
}

exports.updatePubli = async (req, res, next) => {
  try {
    const { titre, contenu, owner, genre} = req.body;

    if (!(titre && contenu && owner && genre)) {
      res.status(400).send('All input are required');
    }

    const post = await Post.updateOne({
      titre,
      contenu,
      owner,
      genre
    });

    res.status(200).send(post);

  } 
  catch (error) {
    console.log(error);
  }
}

exports.deletePubli = async (req, res, next) => {
  const id = req.params.id;
  const posts = await Post.deleteOne({id: id});
  return res.send(posts);
}